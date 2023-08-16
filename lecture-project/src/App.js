import React from "react";
import { Switch, Route } from "react-router-dom";
import Hooks from "./Hooks";
import "./App.css";

const realDomNode = document.createElement("div");

window.realDomNode = realDomNode;

function App() {
  

  return (
    <div className="App">
      <nav>HI THIS IS THE NAV</nav>
      <Switch>
        <Route exact path={"/component"}>
          <NewComponent />
        </Route>
        <Route exact path={"/hooks"}>
          <Hooks />
        </Route>
        <Route exact path={"/"}>
          <h1>yo this is the home page</h1>
        </Route>
        <Route>
          <h1>Yo there's nothing here</h1>
        </Route>
      </Switch>
    </div>
  );
}

function NewComponent() {
  return (
    <div>
      <h1>this is from the new component route</h1>
    </div>
  );
}

export default App;
