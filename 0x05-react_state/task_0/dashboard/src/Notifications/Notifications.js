import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only update if the next listNotifications is longer than the current one
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const {
      listNotifications,
      displayDrawer,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          <p>Notifications</p>
        </div>
        <div className={css(styles.notifications)}>
          {displayDrawer ? (
            <>
              <button
                className={css(styles.closeButton)}
                onClick={handleHideDrawer}
              >
                X
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ul)}>
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

const bounce = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "100%": {
    transform: "translateY(5px)",
  },
};

const fadeIn = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const styles = StyleSheet.create({
  notifications: {
    "@media (min-width: 900px)": {
      padding: "2rem",
      border: "2px dotted #df354b",
    },
  },
  ul: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  responsiveNotifications: {
    "@media (max-width: 900px)": {
      width: "100%",
      padding: 0,
      fontSize: "20px",
    },
  },

  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    padding: "10px",
    position: "fixed",
    right: "10px",
    top: "10px",
    zIndex: 1000,
    animationName: [fadeIn, bounce],
    animationDuration: "1s, 0.5s",
    animationIterationCount: "3, 3",
    ":hover": {
      animationName: [fadeIn, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },
});
