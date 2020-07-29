import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./stores/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import packageJson from "../package.json";
import { defaults } from "axios";

defaults.baseURL =
  (process.env.BUILD_ENV === "production"
    ? packageJson.homepage
    : packageJson.devUrl.node) + "api/";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
