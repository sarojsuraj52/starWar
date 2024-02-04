import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "200px",
    margin: "0.5rem",
    display: "inline-block",
  },
}));

const ResultCard = ({ label, count }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="h4">{count}</Typography>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
