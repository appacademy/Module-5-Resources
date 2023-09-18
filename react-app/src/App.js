import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import State from "./components/State";

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
        <Route>
          <h3>Whatever route you're on is a 404, homie</h3>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
