import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem({ type, html, value }) {
  NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }),
    value: PropTypes.string,
  };

  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {html ? null : value}
    </li>
  );
}
