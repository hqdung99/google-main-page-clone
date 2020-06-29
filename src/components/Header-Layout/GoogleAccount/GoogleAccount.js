import React, { useState, useEffect, useRef } from "react";
import "./GoogleAccount.scss";
import { useOutsideAlerter } from "../../Helpers/OutsideAlerter";
import { AccountItem } from "../GoogleApp-Layout/AccountItem";
import { AddAnotherAccount } from "../GoogleApp-Layout/AddAnotherAccount";
import { SignoutButton } from "../GoogleApp-Layout/SignoutButton";
import { FooterGoogleAccount } from "../GoogleApp-Layout/FooterGoogleAccount";
import { AccountInfor } from "../GoogleApp-Layout/AccountInfor";

export const GoogleAccount = ({
  showGoogleAccount,
  setShowGoogleAccount,
  showSelectProfileInfor,
  setShowSelectProfileInfor,
}) => {
  const [heightContainer, setHeightContainer] = useState(500);

  useEffect(() => {
    if (window.innerHeight < 630) {
      setHeightContainer(window.innerHeight - 58 - 20);
    }
    function onResizeWindow() {
      if (window.innerHeight > 630) setHeightContainer(500);
      else setHeightContainer(window.innerHeight - 58 - 20);
    }
    window.onresize = onResizeWindow;
  }, []);

  const wrapperRefGoogleAccount = useRef(null);
  useOutsideAlerter(
    wrapperRefGoogleAccount,
    showGoogleAccount,
    setShowGoogleAccount
  );

  return (
    <div
      ref={wrapperRefGoogleAccount}
      className="container-google-account-container"
      style={{ height: heightContainer }}
    >
      <AccountInfor
        showSelectProfileInfor={showSelectProfileInfor}
        setShowSelectProfileInfor={setShowSelectProfileInfor}
      />
      <div className="accounts-container">
        <AccountItem
          avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8mz-du1n-f8XasBqi83lJj61DJCkVHmN2qhwU=s128-b16-cc-rp-mo"
          name="Huỳnh Quốc Dũng"
          email="hqdung99@gmail.com"
        />
        <AddAnotherAccount />
      </div>
      <div className="footer-container">
        <SignoutButton />
        <FooterGoogleAccount />
      </div>
    </div>
  );
};
