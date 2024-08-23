import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";
import holbertonLogo from "./Holberton-logo.jpg";

function App() {
  const isIndexPage = true;

  // Function to handle click event on labels to focus the corresponding input
  // eslint-disable-next-line
  const handleClick = (e) => {
    e.target.nextElementSibling.focus(); // Focuses the next sibling element, which is the input field
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={holbertonLogo}
          alt="Holberton Logo"
          width={100}
          height={100}
        />
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <hr />
        <p>Login to access the full dashboard</p>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">OK</button>
        </form>
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
