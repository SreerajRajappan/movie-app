import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import StateContext from "../StateContext";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 375,
    margin: "30px 0"
  },
  details: {
    display: "flex"
  },
  cover: {
    width: 175,
    height: 175
  }
}));

const CardList = () => {
  const classes = useStyles();
  const appState = useContext(StateContext);

  return (
    <>
      {appState.moviesData && appState.moviesData.length > 0 ? (
        appState.moviesData.map((movie, index) => {
          if (movie.Title) {
            return (
              <Card className={classes.root} key={index}>
                <div className={classes.details}>
                  <div>
                    <CardMedia className={classes.cover} image={movie.Poster} title="Live from space album cover" />
                  </div>
                  <div>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {`${movie.Title} (${movie.Year})`}
                      </Typography>{" "}
                      <Typography variant="subtitle1" color="textSecondary">
                        <strong>Genre:</strong> {movie.Genre}{" "}
                        <span style={{ paddingLeft: "15px" }}>
                          <strong>Director:</strong> {movie.Director}
                        </span>
                      </Typography>
                      <Typography paragraph>{movie.Plot}</Typography>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          } else {
            return "";
          }
        })
      ) : (
        <p style={{ color: "#333" }}>No Results Found!</p>
      )}
    </>
  );
};

export default CardList;
