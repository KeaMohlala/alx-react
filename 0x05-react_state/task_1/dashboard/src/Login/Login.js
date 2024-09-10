import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    checkIfFormValid(e.target.value, password);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    checkIfFormValid(email, e.target.value);
  };

  const checkIfFormValid = (email, password) => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  return (
    <React.Fragment>
      <hr className={css(styles.hr)} />
      {!isLoggedIn ? (
        <div>
          <p className={css(styles.p)}>Login to access the full dashboard</p>
          <form
            className={css(styles.formHorizontal)}
            onSubmit={handleLoginSubmit}
          >
            <div className={css(styles.formGroup)}>
              <label className={css(styles.label)} htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className={css(styles.formGroup)}>
              <label className={css(styles.label)} htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <input type="submit" value="OK" disabled={!enableSubmit} />
          </form>
        </div>
      ) : (
        <p> Welcome! You are logged in</p>
      )}
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
    "@media (min-width: 900px)": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "20px",
    },
  },

  formGroup: {
    display: "flex",
    alignItems: "center",
  },

  label: {
    marginRight: "10px",
  },
});
