import axios from "axios";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

// GET LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};

// DELETE LEAD
export const deleteLead = (leadId) => (dispatch) => {
  axios
    .delete(`/api/leads/${leadId}/`)
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
export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
