import { combineReducers } from 'redux';
import peopleReducer from './peopleSlice';

const rootReducer = combineReducers({
  people: peopleReducer,
  // Add other reducers as needed
});

export default rootReducer;
