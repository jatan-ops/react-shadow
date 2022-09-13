import React from "react";
import ReactDOM from "react-dom";
import root from "react-shadow/styled-components";
import styles from "!raw-loader!./styles.css";
import * as e from "./styles";

function App() {
  return (
    <>
      Hey Jatan
      <root.div>
        <q>There is strong shadow where there is much light.</q>
        <e.Author>― Johann Wolfgang von Goethe.</e.Author>
      </root.div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
