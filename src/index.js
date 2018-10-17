import React from "react"
import ReactDOM from "react-dom"

import Hello from "./components/hello/hello.jsx"
import "./style.css"

const App = () => {
  return (
    <div className="main">
      <Hello />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
