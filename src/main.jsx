import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./services/store"; // Adjust the path if necessary
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
