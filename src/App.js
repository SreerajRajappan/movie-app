import React from "react";
import { useImmerReducer } from "use-immer";

//Custom Components
import "./App.css";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import Home from "./components/Home";

function App() {
  const initialState = {
    searchKey: "",
    searchResult: null,
    moviesData: []
  };

  const mainReducer = (draft, action) => {
    switch (action.type) {
      case "setSearchKey":
        draft.searchKey = action.value;
        return;

      case "setSearchResult":
        draft.searchResult = action.value;
        return;

      case "setMoviesData":
        draft.moviesData = [...draft.moviesData, action.value];
        return;

      default:
        return;
    }
  };

  const [state, dispatch] = useImmerReducer(mainReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Home />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
