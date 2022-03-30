import logo from "./logo.svg";
import "./App.css";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ margin: "1px", padding: "10px" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          style={{ color: "red", backgroundColor: "green" }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Message />
    </div>
  );
}

export default App;
