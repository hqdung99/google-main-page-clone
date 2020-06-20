import React from "react";
import { BsDot } from "react-icons/bs";
import "../../../css/FooterGoogleAccount.scss";

export const FooterGoogleAccount = () => {
  return (
    <div className="footer-google-account-container">
      <div className="privacy-container footer-item-container">
        <a
          className="privacy"
          href="https://policies.google.com/privacy?hl=en-GB"
        >
          Privacy Policy
        </a>
      </div>
      <div className="dot">
        <BsDot />
      </div>

      <div className="term-container footer-item-container">
        <a className="term" href="https://policies.google.com/terms?hl=en-GB">
          Terms of Services
        </a>
      </div>
    </div>
  );
};
