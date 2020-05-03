import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { createMessage } from "../../actions/messages";

const initialState = {
  username: "",
  email: "",
  password: "",
  password2: "",
};

const Register = (props) => {
  const { createMessage, register, authenticated } = props;
  const [{ username, email, password, password2 }, setState] = useState(
    initialState
  );
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      createMessage({
        passwordNotMatch: "Passwords do not match",
      });
    } else {
      register({ username, email, password });
    }
  };
  return authenticated ? (
    <Redirect to="/" />
  ) : (
    <Fragment>
      <h1>Register</h1>
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
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={onChange}
            type="email"
            name="email"
            id="email"
            value={email}
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
        <FormGroup>
          <Label for="message">Password</Label>
          <Input
            onChange={onChange}
            type="password"
            name="password2"
            id="password2"
            value={password2}
          />
        </FormGroup>
        <Button>Register</Button>
      </Form>
      <p>
        Already an account? <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
