import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

export default class NotificationItem extends Component {
  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return (
      <li
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? html : undefined}
      >
        {html ? null : value}
      </li>
    );
  }
}
NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};
