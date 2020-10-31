import React from "react";
import Typography from "@material-ui/core/Typography";
import MovieSearchBar from "./MovieSearchBar";

import Page from "./Page";
import Carousal from "./Carousal";
import CardList from "./CardList";

const Home = () => {
  return (
    <Page title="Home">
      <Typography variant="h3" align="center" gutterBottom>
        Search Movie
      </Typography>
      <MovieSearchBar />
      <Carousal />
      <CardList />
    </Page>
  );
};

export default Home;
