import React from "react";
import holbertonLogo from "../assets/Holberton-logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <img src={holbertonLogo} alt="Holberton Logo" width={100} height={100} />
      <h1>School Dashboard</h1>
    </header>
  );
}
