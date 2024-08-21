// task_1/dashboard/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications"; // Import the Notifications component
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");
const notificationsRoot = document.createElement("div"); // Create a new div for notifications
notificationsRoot.id = "root-notifications"; // Assign an ID to the new div
document.body.appendChild(notificationsRoot); // Append the new div to the body

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(notificationsRoot).render(<Notifications />); // Render the Notifications component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
