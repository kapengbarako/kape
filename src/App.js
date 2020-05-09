import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.css'
import Button from "./components/atoms/Button";

function App() {
  return (
    <div className="bg-indigo-600">
      <div className="text-2xl text-green-600">
        HELLO
      </div>

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
        <Button/>
      </header>
    </div>
  );
}

export default App;
