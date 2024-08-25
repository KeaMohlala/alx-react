import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import CourseList from "./CourseList/CourseList";
import PropTypes from "prop-types";

export default function App({ isLoggedIn = false }) {
  App.PropTypes = {
    isLoggedIn: PropTypes.bool,
  };
  App.defaultProps = {
    isLoggedIn: false,
  };
  return (
    <React.Fragment>
      <Header />
      <div className="App-body">{isLoggedIn ? <CourseList /> : <Login />}</div>
      <Footer />
    </React.Fragment>
  );
}
