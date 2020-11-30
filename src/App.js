import "./App.css";
import Blog from "./Blog/blog";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import blogReducer from "./redux/reducer/blogReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const mw = [thunk, logger];

const store = createStore(blogReducer, applyMiddleware(...mw));

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Blog />
            </div>
        </Provider>
    );
}
if (window.Cypress) {
    window.store = store;
}

export default App;
