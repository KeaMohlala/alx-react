import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  const isIndexPage = true;
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="task_0/dashboard/src/Holberton_logo.jpg"
          alt="Holberton Logo"
        />
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <hr />
        <p>Login to access the full dashboard</p>
        <hr />
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(isIndexPage)}
        </p>
      </footer>
    </div>
  );
}

export default App;
