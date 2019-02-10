import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./config.js";

import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  reducers,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
