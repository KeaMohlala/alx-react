import React from "react";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import "./Notifications.css";

export default function Notifications() {
  Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
  };

  Notifications.defaultProps = {
    displayDrawer: false,
  };
  return (
    <>
      <div className="menuItem">
        <p> Notifications</p>
      </div>
      <div
        id="root-notifications"
        className={`Notifications ${displayDrawer ? "" : "hidden"}`}
      >
        <p>Here is the list of notifications</p>

        {/* Close button */}
        <button
          style={{
            float: "right",
            padding: "5px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          aria-label="Close"
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={closeIcon} alt="Close Icon" width={20} height={20} />
        </button>

        {/* Notification List */}
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem html={getLatestNotification()} />
        </ul>
      </div>
    </>
  );
}
