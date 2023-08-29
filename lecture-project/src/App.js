import React from "react";
import { Switch, Route } from "react-router-dom";
import Hooks from "./Hooks";
import "./App.css";
import FormWithApi from "./FormWithApi";
import ClassComponent from "./ClassComponent";
import { ReduxSubscriber } from "./components/FunWithRedux";
import CssComponent from "./components/CssComponent";

const realDomNode = document.createElement("div");

window.realDomNode = realDomNode;

function App() {
  return (
    <div className="App">
      <nav>HI THIS IS THE NAV</nav>
      {/* <ReduxSubscriber /> */}
      <Switch>
        <Route exact path={"/component"}>
          <NewComponent />
        </Route>
        <Route exact path={"/classes"}>
          <ClassComponent newProp="this is a prop" />
        </Route>
        <Route exact path={"/success"}>
          <h1>Congrats you did it!</h1>
        </Route>
        <Route exact path={"/hooks"}>
          <Hooks />
        </Route>
        <Route exact path={"/forms-with-api"}>
          <FormWithApi />
        </Route>
        <Route exact path={"/css"}>
          <CssComponent />
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
