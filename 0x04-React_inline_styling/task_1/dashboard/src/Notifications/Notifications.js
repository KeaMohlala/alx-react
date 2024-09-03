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
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { listNotifications } = this.props;

    return (
      <>
        <div className="menuItem">
          <p>Notifications</p>
        </div>
        <div className={css(styles.notifications)}>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
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
          )}
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

const styles = StyleSheet.create({
  notifications: {
    padding: "2rem",
    border: "2px dotted #df354b",
  },
  ul: {
    listStyleType: "none",
    paddingLeft: "0",
  },
});
