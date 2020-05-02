import React, { Fragment } from "react";
import LeadForm from "./LeadForm";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <Fragment>
      <LeadForm />
      <Leads />
    </Fragment>
  );
}
