import React from "react";
import Typography from "@material-ui/core/Typography";
import MovieSearchBar from "./MovieSearchBar";
import CardList from "./CardList";

import Page from "./Page";

const Home = () => {
  return (
    <Page title="Home">
      <Typography variant="h3" align="center" gutterBottom>
        Search Movie
      </Typography>
      <MovieSearchBar />
      <CardList />
    </Page>
  );
};

export default Home;
