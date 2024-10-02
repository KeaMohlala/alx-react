import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import uiReducer from './reducers/uiReducer'; // Import the uiReducer

// Create the store using the uiReducer
const store = createStore(uiReducer);

// Create the root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App with the Provider passing the store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Log web vitals if needed
reportWebVitals();
