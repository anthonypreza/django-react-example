import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect, useSelector } from "react-redux";
import { addLead } from "../../actions/leads";

const initalState = {
  name: "",
  email: "",
  message: "",
};

const LeadForm = (props) => {
  const [{ name, email, message }, setState] = useState(initalState);
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        props.addLead({
          name: name,
          email: email,
          message: message,
        });
        setState({ ...initalState });
      }}
    >
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          onChange={onChange}
          type="text"
          name="name"
          id="name"
          value={name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          onChange={onChange}
          type="email"
          name="email"
          id="exampleEmail"
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input
          onChange={onChange}
          type="textarea"
          name="message"
          id="message"
          value={message}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

LeadForm.propTypes = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(LeadForm);
