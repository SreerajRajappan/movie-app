import React, { useEffect, useState, useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";

//custom Components
import "./Carousal.css";
import CarousalItem from "./CarousalItem";

import StateContext from "../StateContext";

const Carousal = () => {
  const appState = useContext(StateContext);

  const [currentCard, setCurrentCard] = useState(0);
  const [nextCount, setNextCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  let CarousalItemContainer = React.createRef();

  useEffect(() => {
    if (nextCount > 0) {
      CarousalItemContainer.current.style.transitionDuration = "0.5s";
      CarousalItemContainer.current.style.transform = `translate(-${250 * currentCard}px)`;

      if (currentCard === CarousalItemContainer.current.children.length - 5) {
        setTimeout(() => {
          setCurrentCard(4);
        }, 500);
      }
    }
  }, [nextCount]);

  useEffect(() => {
    if (prevCount > 0) {
      CarousalItemContainer.current.style.transitionDuration = "0.5s";
      CarousalItemContainer.current.style.transform = `translate(-${250 * currentCard}px)`;

      if (currentCard === 0) {
        setTimeout(() => {
          setCurrentCard(0);
        }, 500);
      }
    }
  }, [prevCount]);

  const handleNext = () => {
    if (currentCard < CarousalItemContainer.current.children.length - 1) {
      setCurrentCard(currentCard + 1);
      setNextCount(nextCount + 1);
    }
  };
  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setPrevCount(prevCount + 1);
    }
  };
  let carousal = appState.searchResult ? (
    <div className="CarousalSection">
      <div className="CarousalViewPort">
        <div ref={CarousalItemContainer} className="CarousalItemContainer">
          {appState.searchResult.map((movie, i) => (
            <CarousalItem key={i} imgSrc={movie.Poster} />
          ))}
        </div>
      </div>
      <IconButton aria-label="left" onClick={handleNext} className="RightArrowBtn">
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton aria-label="right" onClick={handlePrevious} className="LeftArrowBtn">
        <ArrowBackIosIcon />
      </IconButton>
    </div>
  ) : (
    ""
  );
  return carousal;
};

export default Carousal;
