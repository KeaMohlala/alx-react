import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import AppContext, { defaultUser, defaultLogOut } from "./AppContext";

export default class App extends Component {
  // Define the static propTypes and defaultProps as static properties of the class
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        {
          id: 3,
          type: "urgent",
          html: { __html: "<strong>Urgent requirement</strong>" },
        },
      ],
    };
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({ user: defaultUser });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      logOut();
    }
  };

  render() {
    // Destructure props to access isLoggedIn
    const { isLoggedIn } = this.props;
    const { displayDrawer, user } = this.state;

    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <React.Fragment>
          <Notifications
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <div className={css(styles.appBody)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Here is some news from the school. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin id lacus nec sapien euismod
                tincidunt. Nulla facilisi.
              </p>
            </BodySection>
          </div>
          <Footer />
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "14px",
    marginTop: "10px",
    marginBottom: "50px",
  },
});
