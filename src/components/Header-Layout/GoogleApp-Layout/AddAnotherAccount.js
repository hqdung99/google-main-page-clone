import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import "../../../css/AddAnotherAccount.scss";

export const AddAnotherAccount = () => {
  return (
    <div
      className="add-another-account-container"
      href="https://accounts.google.com/signin/v2/identifier?hl=en-GB&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-GB&flowName=GlifWebSignIn&flowEntry=AddSession"
    >
      <div className="add-account-icon">
        <AiOutlineUserAdd style={{ fontSize: "20px" }} />
      </div>
      <div className="add-another-account-text">Add another account</div>
    </div>
  );
};
