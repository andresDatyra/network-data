import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
import ChartInfo from "./components/ChartInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        {numbers.map((number) => (
          <Grid item xs={4} key={number}>
            <ChartInfo />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
