import React from "react";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png"; // Ensure the path is correct
import "./Notifications.css";

export default function Notifications() {
  return (
    <div id="root-notifications" className="Notifications">
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
