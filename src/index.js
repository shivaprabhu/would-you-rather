import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
//import { Provider } from "react-redux";
import combineReducers from "./reducers";
import applyMiddleware from "./middleware";

export const Context = React.createContext();

class Provider extends Component {
  render() {
    const { store } = this.props;
    return <Context.Provider value={store}>{this.props.children}</Context.Provider>;
  }
}

const store = createStore(combineReducers, applyMiddleware);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Context;
