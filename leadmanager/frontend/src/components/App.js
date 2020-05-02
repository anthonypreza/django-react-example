import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Container } from "reactstrap";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <Container>
            <Dashboard />
          </Container>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
