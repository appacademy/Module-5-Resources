import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleInput from "./components/ArticleInput";
import "./App.css";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ArticleList />
          </Route>
          <Route exact path="/article/:id">
            <SingleArticle />
          </Route>
          <Route exact path="/create">
            <ArticleInput />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
