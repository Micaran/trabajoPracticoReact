import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
