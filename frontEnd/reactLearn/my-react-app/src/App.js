import logo from './logo.svg';
import './App.css';
import MyButton from './button.js';
import Profile from "./displayData";
import TextList from "./list";
import StateButton from "./state";
import StateSyncButton from "./stateSync";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <MyButton/>
        <Profile/>
        <TextList/>
        <StateButton/>
        <StateButton/>
        <StateSyncButton/>
        <StateSyncButton/>
      </header>
    </div>
  );
}

export default App;
