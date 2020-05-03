import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const { authenticated } = props;
  const [{ username, password }, setState] = useState(initialState);
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.login(username, password);
  };
  return authenticated ? (
    <Redirect to="/" />
  ) : (
    <Fragment>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="name">Username</Label>
          <Input
            onChange={onChange}
            type="text"
            name="username"
            id="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Password</Label>
          <Input
            onChange={onChange}
            type="password"
            name="password"
            id="password"
            value={password}
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { login })(Login);
