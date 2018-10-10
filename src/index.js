import React from "react";
import ReactDOM from "react-dom";

import GuestList from "./components/GuestList/GuestList";
import Friend from "./components/Friend/Friend";
import friends from "./fakeData/friends";

import "./styles.css";

const App = props => (
  <div className="App">
    <GuestList friends={friends} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
