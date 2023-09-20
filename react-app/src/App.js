import { Switch, Route } from "react-router-dom";

import ClassComponents from "./components/ClassComponents";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import State from "./components/State";

import "./App.css";

function App() {
  return (
    <div className="App-header">
      <Header />
      <Switch>
        <Route path={"/state"}>
          <State />
        </Route>
        <Route path={"/form"}>
          <Form />
        </Route>
        <Route path={"/classes"}>
           <ClassComponents />
        </Route>
        <Route>
          <h3>Whatever route you're on is a 404, homie</h3>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
