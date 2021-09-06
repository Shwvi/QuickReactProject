import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.less";

const App = () => {
  return <div className={styles.home}>hello world!</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
