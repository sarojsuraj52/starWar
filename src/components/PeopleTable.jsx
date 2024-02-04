import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPeople, actions as peopleActions } from "../redux/peopleSlice";
import ResultCard from "./ResultCard";
import TableComponent from "./TableComponent";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 5px 0px, rgba(0, 0, 0, 0.12) 0px 4px 20px 0px !important",
    borderRadius: "8px",
    padding: "1rem",
    overflow: "hidden",
    margin: "1rem auto",
    maxWidth: "800px",
  },
  errorMessage: {
    padding: "1rem",
    borderRadius: "8px",
    textAlign: "center",
    color: "white",
    backgroundColor: "red",
    margin: "1.5rem auto",
    maxWidth:'800px'
  },
  sortBtn: {
    padding: "1.1rem",
    cursor: "pointer",
    border: "none",
    transition: "all 1s",
    "&:hover": {
      backgroundColor: "#cbc9c9",
    },
  },
}));

const PeopleTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people) || {};
  const loading = useSelector((state) => state.people.loading);
  const error = useSelector((state) => state.people.error);
  const sorting = useSelector((state) => state.people.sorting);

  useEffect(() => {
    dispatch(getPeople(page));
  }, [dispatch, page]);

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleSort = (direction) => {
    dispatch(peopleActions.setSorting({ column: "name", direction }));
    handleSortClose();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1); // Update the page number
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset page number to 1 when changing rows per page
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const countSpecies = (species) => {
    return people.results?.filter((person) =>
      person.species.includes(species)
    ).length;
  };
  

  return (
    <>
      {error ? (
        <Typography variant="body1" className={classes.errorMessage}>
          <i className="fa fa-exclamation-circle" aria-hidden="true">
            {" "}
          </i>
          &nbsp; API server might be down
        </Typography>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResultCard label="Total Results" count={people.count || 0} />
            <ResultCard
              label="Total Droids"
              count={countSpecies("Droid")}
            />
            <ResultCard
              label="Total Humans"
              count={countSpecies("Human")}
            />
          </div>
          <TableComponent
            loading={loading}
            people={people}
            sorting={sorting}
            searchQuery={searchQuery}
            handleSortClick={handleSortClick}
            handleSortClose={handleSortClose}
            handleSort={handleSort}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleSearchChange={handleSearchChange}
            rowsPerPage={rowsPerPage}
            page={page}
            sortAnchorEl={sortAnchorEl}
          />
        </div>
      )}
    </>
  );
};

export default PeopleTable;
