import React from "react";
import "./Notifications.css";

export default function NotificationItem({ type, html, value }) {
  NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.objectOf(
      PropTypes.shape({
        __html: PropTypes.string.isRequired,
      })
    ),
    value: PropTypes.string,
  };
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: html }}
    >
      {html ? null : value}
    </li>
  );
}
