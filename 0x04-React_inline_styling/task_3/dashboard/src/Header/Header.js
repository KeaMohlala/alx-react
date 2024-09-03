import React from "react";
import { StyleSheet, css } from "aphrodite";
import holbertonLogo from "../assets/Holberton-logo.jpg";

export default function Header() {
  return (
    <header className={css(styles.appHeader)}>
      <img src={holbertonLogo} alt="Holberton Logo" width={100} height={100} />
      <h1 className={css(styles.h1)}>School Dashboard</h1>
    </header>
  );
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
