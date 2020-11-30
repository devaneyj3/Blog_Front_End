import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import blogReducer from "./redux/reducer/blogReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const mw = [logger, thunk];

const store = createStore(blogReducer, applyMiddleware(...mw));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

if (window.Cypress) {
    window.store = store;
}
