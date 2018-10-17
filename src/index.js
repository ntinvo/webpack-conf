import React from "react"
import ReactDOM from "react-dom"

import Hello from "./components/hello/hello"
import Image from "./components/image/image"

import "./style.css"

import penguins from "./images/penguins.svg"
import doge from "./images/doge.ico"
import unicorn from "./images/unicorn.svg"

const App = () => {
  return (
    <div className="main">
      <Hello />
      <Image src={doge} caption="ico file"/><br /><br />
      <Image src={penguins} caption="svg file that has size less than 1MB"/><br /><br />
      <Image src={unicorn} caption="svg file that has size greater than or equals 1MB"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
