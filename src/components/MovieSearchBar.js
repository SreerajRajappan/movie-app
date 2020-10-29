import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid"
  },
  search: {
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  }
}));

const MovieSearchBar = () => {
  const classes = useStyles();

  const [searchKey, setSearchKey] = useState();

  const searchHandler = e => {
    console.log(e.target.value);
  };

  return (
    <form className={classes.root}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="searchbar">Movie Name</InputLabel>
        <OutlinedInput
          className={classes.search}
          value={searchKey}
          onChange={e => {
            searchHandler(e);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
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
