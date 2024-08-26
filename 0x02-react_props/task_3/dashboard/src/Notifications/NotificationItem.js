import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem({ type, html, value }) {
  // Only use dangerouslySetInnerHTML if html is provided
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Otherwise, render the value as a child
  return <li data-notification-type={type}>{value}</li>;
}

// Define prop types for the component
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.string,
  value: PropTypes.string,
};

// Set default props in case they are not provided
NotificationItem.defaultProps = {
  type: "default",
};
