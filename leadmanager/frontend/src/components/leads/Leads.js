import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";
import { Table } from "reactstrap";

const Leads = (props) => {
  useEffect(() => {
    props.getLeads();
  }, []);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {props.leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.id}</td>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.message}</td>
            <td>
              <button
                onClick={() => props.deleteLead(lead.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

Leads.propTypes = {
  leads: PropTypes.array.isRequired,
  getLeads: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
