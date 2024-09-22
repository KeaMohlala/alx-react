import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import holbertonLogo from "../assets/Holberton-logo.jpg";
import AppContext from "../App/AppContext";

export default class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.appHeader)}>
        <img
          src={holbertonLogo}
          alt="Holberton Logo"
          width={100}
          height={100}
        />
        <h1 className={css(styles.h1)}>School Dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (
            <a href="#" onClick={logOut}>
              logout
            </a>
            )
          </section>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    color: "#df354b",
    display: "flex",
  },

  h1: {
    fontFamily: "sans-serif",
    color: "#df354b",
    fontStyle: "normal",
    lineHeight: "20px",
    fontWeight: "800",
    fontSize: "20px",
    marginTop: "2rem",
  },
});
