import React, { useState, useEffect, useRef } from "react";
import { GoogleAppsContainer } from "./Header-Layout/GoogleAppsContainer";
import { GoogleAccount } from "./Header-Layout/GoogleAccount";
import { SelectProfileInfor } from "./Header-Layout/SelectProfileInfor";

export const Header = () => {
  const [showGoogleApps, setShowGoogleApps] = useState(false);
  const [showGoogleAccount, setShowGoogleAccount] = useState(false);
  const [showSelectProfileInfor, setShowSelectProfileInfor] = useState(false);

  return (
    <div className="container-header">
      <div className="header-item">
        <a href="https://mail.google.com/">Gmail</a>
      </div>
      <div className="header-item">
        <a href="https://images.google.com/">Images</a>
      </div>
      <div className="header-item container-google-apps-expand-icon">
        <div
          className="google-apps-round"
          data-title="Google apps"
          onClick={() => {
            if (showGoogleApps) setShowGoogleApps(false);
            else setShowGoogleApps(true);
          }}
        >
          <div className="image-container"></div>
        </div>
      </div>
      <div className="header-item container-google-account-expand-icon">
        <div
          className="google-account-round"
          data-title="tuongtukhoc@gmail.com"
          onClick={() => {
            if (showGoogleAccount) setShowGoogleAccount(false);
            else setShowGoogleAccount(true);
          }}
        >
          <div className="image-container"></div>
        </div>
      </div>
      {showGoogleApps && (
        <GoogleAppsContainer
          showGoogleApps={showGoogleApps}
          setShowGoogleApps={setShowGoogleApps}
        />
      )}
      {showGoogleAccount && (
        <GoogleAccount
          showGoogleAccount={showGoogleAccount}
          setShowGoogleAccount={setShowGoogleAccount}
          showSelectProfileInfor={showSelectProfileInfor}
          setShowSelectProfileInfor={setShowSelectProfileInfor}
        />
      )}
      {true && <SelectProfileInfor />}
    </div>
  );
};
