import './App.css';
import MyHomePage from './components/MyHomePage';
import ReactComponent from './components/ReactComponent';

function App() {
  return (
    <div className="App">
      <MyHomePage />
      <ReactComponent content={"content 1"} loggedIn={false} />
      <ReactComponent content="yo howdy" loggedIn={true} />
      <ReactComponent content="i don't even know man" loggedIn />
    </div>
  );
}

export default App;
