import React from "react";
import ReactDOM from "react-dom";
import EXPage from "./ui/pages/EXP";
import DrakModeControlBtn from "./ui/components/DarkModeControlBtn";
import "./index.css";

const App = () => {
  return (
    <>
      <DrakModeControlBtn />
      <EXPage />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
