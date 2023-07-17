import logo from './logo.svg';
import './App.css';
import MyHomePage from './components/MyHomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>yo howdy!!!!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyHomePage />
      </header>
    </div>
  );
}

export default App;
