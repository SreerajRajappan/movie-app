import React from "react";
import Typography from "@material-ui/core/Typography";
import MovieSearchBar from "./MovieSearchBar";

//Custom Components
import Page from "./Page";

const Home = () => {
  return (
    <Page title="Home">
      <Typography variant="h3" align="center" gutterBottom>
        Movie Search Platform
      </Typography>
      <MovieSearchBar />
    </Page>
  );
};

export default Home;
