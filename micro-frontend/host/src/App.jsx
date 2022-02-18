import React from "react";
import ReactDOM from "react-dom";

import { Greetings } from "remote1/Greetings";

import "./index.css";

const App = () => (
  <div className="container">
    <Greetings name="Emrah" />

    <hr />
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
