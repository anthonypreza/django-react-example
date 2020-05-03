import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import LeadForm from "./LeadForm";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <Fragment>
      <h1>Add Leads</h1>
      <LeadForm />
      <h1>Leads</h1>
      <Leads />
    </Fragment>
  );
}
