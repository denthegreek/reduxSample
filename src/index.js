import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");

// Create a root and render the App
const root = ReactDOM.createRoot(rootElement);  // Use `createRoot()` here

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);