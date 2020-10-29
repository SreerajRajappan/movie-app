import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "30px"
  }
}));

const Page = props => {
  const classes = useStyles();

  useEffect(() => {
    document.title = `${props.title}  | Movie Search App`;
    window.scrollTo(0, 0);
  });

  return <Container className={classes.root}>{props.children}</Container>;
};

export default Page;
