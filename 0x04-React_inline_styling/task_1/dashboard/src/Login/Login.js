import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <React.Fragment>
      <hr className={css(styles.hr)} />
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form className={css(styles.formHorizontal)}>
        <div className={css(styles.formGroup)}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label className={css(styles.label)} htmlFor="password">
            Password:
          </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">OK</button>
      </form>
      <hr className={css(styles.hr)} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  hr: {
    border: "2px solid #df354b",
  },

  p: {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "14px",
    marginTop: "10px",
    marginBottom: "50px",
  },

  formHorizontal: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
  },

  formGroup: {
    display: "flex",
    alignItems: "center",
  },

  label: {
    marginRight: "10px",
  },
});
