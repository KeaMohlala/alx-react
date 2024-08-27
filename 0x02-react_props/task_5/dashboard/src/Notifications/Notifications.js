import React from "react";
import { getLatestNotification } from "./utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";
import "./Notifications.css";

export default function Notifications({ listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Notifications</p>
      </div>
      <div className="Notifications">
        {listNotifications.length === 0 ? (
          <p>No new notification for now</p>
        ) : (
          <>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};
