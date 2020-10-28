import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";

const Page = props => {
  useEffect(() => {
    document.title = `${props.title}  | Movie Search App`;
    window.scrollTo(0, 0);
  });

  return <Container>{props.children}</Container>;
};

export default Page;
