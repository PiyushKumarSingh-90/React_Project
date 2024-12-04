import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for createRoot
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
