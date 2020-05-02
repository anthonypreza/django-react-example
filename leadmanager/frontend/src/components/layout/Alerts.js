import React, { Fragment, useEffect, useState } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

const initialState = {
  error: {},
  message: {},
};

const Alerts = (props) => {
  const { error, alert, message } = props;
  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (error !== state.error) {
      setState({
        ...state,
        error: error,
      });
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
    }
    if (message !== state.message) {
      setState({
        ...state,
        message: message,
      });
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
    }
  }, [error, message]);
  return <Fragment />;
};

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
