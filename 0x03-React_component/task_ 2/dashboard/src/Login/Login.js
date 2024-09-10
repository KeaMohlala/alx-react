import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
