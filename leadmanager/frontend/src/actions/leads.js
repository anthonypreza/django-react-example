import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import { createMessage, returnErrors } from "./messages";
import { getHeaders } from "./headers";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;
  const config = getHeaders(token);
  axios
    .get("/api/leads/", config)
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = (leadId) => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;
  const config = getHeaders(token);
  axios
    .delete(`/api/leads/${leadId}/`, config)
    .then(() => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: leadId,
      });
    })
    .catch((err) => console.error(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;
  const config = getHeaders(token);
  axios
    .post("/api/leads/", lead, config)
    .then((res) => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
