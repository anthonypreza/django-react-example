import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";
import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Dashboard />
      </Container>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
