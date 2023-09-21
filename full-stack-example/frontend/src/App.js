import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleInput from "./components/ArticleInput";
import SingleArticle from "./components/SingleArticle";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    return () => {
      // if this runs we refreshed
    }
  }, [])
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
