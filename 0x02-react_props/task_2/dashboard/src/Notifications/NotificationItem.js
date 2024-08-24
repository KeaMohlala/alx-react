import React from "react";
import "./Notifications.css";

export default function NotificationItem({ type, html, value }) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: html }}
    >
      {html ? null : value}
    </li>
  );
}
