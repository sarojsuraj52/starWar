import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  people: [],
  currentPage: 1,
  totalPages: 1,
  searchQuery: "",
  sorting: { column: "", direction: "" }, // Add sorting state
};

export const getPeople = createAsyncThunk("getPeople", async (page = 1) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      console.log('iiiiii',response)
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  });
  
const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setSorting(state, action) {
      state.sorting = action.payload;
    },
},
  extraReducers: (builder) => {
    builder
      .addCase(getPeople.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPeople.fulfilled, (state, action) => {
        state.people = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions, reducer } = peopleSlice;
export default peopleSlice.reducer;
