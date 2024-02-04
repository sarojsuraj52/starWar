import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Typography,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const SORT_ASC = "asc";
const SORT_DESC = "desc";

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

const TableComponent = ({
  loading,
  people,
  sorting,
  searchQuery,
  handleSortClick,
  handleSortClose,
  handleSort,
  handleChangePage,
  handleChangeRowsPerPage,
  handleSearchChange,
  rowsPerPage,
  page,
  sortAnchorEl,
}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ marginRight: "1rem" }}
        />
        <button className={classes.sortBtn}>
          <i
            className="fa fa-sort"
            aria-hidden="true"
            onClick={handleSortClick}
          ></i>
        </button>

        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={handleSortClose}
        >
          <MenuItem onClick={() => handleSort(SORT_ASC)}>Ascending</MenuItem>
          <MenuItem onClick={() => handleSort(SORT_DESC)}>Descending</MenuItem>
        </Menu>
      </div>
      <Table>
      <TableHead>
  <TableRow>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Name
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Height
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Mass
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Hair Color
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Skin Color
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Eye Color
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Birth Year
      </Typography>
    </TableCell>
    <TableCell>
      <Typography variant="" style={{ fontWeight: "bold" }}>
        Gender
      </Typography>
    </TableCell>
  </TableRow>
</TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={8}>
                <i className="fa fa-spinner" aria-hidden="true"></i>
              </TableCell>
            </TableRow>
          ) : (
            // Filter and sort the people data
            people.results
              ?.filter((person) =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .sort((a, b) => {
                if (sorting.direction === SORT_ASC) {
                  return a.name.localeCompare(b.name);
                } else {
                  return b.name.localeCompare(a.name);
                }
              })
              .map((person) => (
                <TableRow key={person.url}>
                  <TableCell>{person.name}</TableCell>
                  <TableCell>{person.height}</TableCell>
                  <TableCell>{person.mass}</TableCell>
                  <TableCell>{person.hair_color}</TableCell>
                  <TableCell>{person.skin_color}</TableCell>
                  <TableCell>{person.eye_color}</TableCell>
                  <TableCell>{person.birth_year}</TableCell>
                  <TableCell>{person.gender}</TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={people.count || 0} // Assuming count property is available
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TableComponent;
