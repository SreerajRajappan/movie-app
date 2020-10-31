import React, { useContext, useEffect } from "react";
import Axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  search: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    minWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  }
}));

const MovieSearchBar = () => {
  const classes = useStyles();

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  useEffect(() => {
    if (appState.searchResult && appState.searchResult.length > 0) {
      const ourRequest = Axios.CancelToken.source();

      appState.searchResult.map(movie => {
        const url2 = "http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=5f297f29";
        const fetchResult = async () => {
          try {
            const response = await Axios.post(url2);
            appDispatch({ type: "setMoviesData", value: response.data });
          } catch (e) {
            console.log(e);
          }
        };
        fetchResult();

        return movie;
      });
      return () => ourRequest.cancel(); //Cancel request token
    }
  }, [appState.searchResult, appDispatch]);

  //set search key
  const searchChangeHandler = e => {
    e.preventDefault();
    appDispatch({ type: "setSearchKey", value: e.target.value });
  };

  //search for movies using searchKey
  const searchMoviesHandler = e => {
    e.preventDefault();
    const url = "http://www.omdbapi.com/?s=" + appState.searchKey + "&apikey=5f297f29";

    Axios.post(url)
      .then(response => {
        let movieList = response.data.Search.map(movie => movie);
        appDispatch({ type: "setSearchResult", value: movieList });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form className={classes.root} onSubmit={searchMoviesHandler}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="searchbar">Movie Name</InputLabel>
        <OutlinedInput
          className={classes.search}
          onChange={e => {
            searchChangeHandler(e);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" onClick={searchMoviesHandler}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={120}
        />
      </FormControl>
    </form>
  );
};

export default MovieSearchBar;
