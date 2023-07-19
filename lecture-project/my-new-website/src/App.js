import './App.css';
import MyHomePage from './components/MyHomePage';
import ReactComponent from './components/ReactComponent';
import { Route, Switch } from 'react-router-dom';
import ReactStateHook from './components/ReactStateHook';

function App() {
  return (
    <Switch>
      <div className="App">
        <ReactStateHook />
        {/* <Route>
          <MyHomePage path="/" />
        </Route>
        <ReactComponent content={"content 1"} loggedIn={false} />
        <ReactComponent content="yo howdy" loggedIn={true} />
        <ReactComponent content="i don't even know man" loggedIn /> */}
      </div>
    </Switch>
  );
}

export default App;
