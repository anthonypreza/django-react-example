import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import { Container } from "reactstrap";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Container>
          <Dashboard />
        </Container>
      </Fragment>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
