import React from "react";
import "./FooterSetAvatar.scss";

export const FooterSetAvatar = ({
  setShowSelectProfileInfor,
  setSetProfilePhoto,
  activeSetProfilePhoto,
}) => {
  return (
    <div className="footer-set-avatar">
      <div
        className={
          activeSetProfilePhoto
            ? "set-profile-photo-button button set-button active"
            : "set-profile-photo-button button set-button"
        }
        onClick={() => {
          setSetProfilePhoto(true);
        }}
      >
        Set an profile photo
      </div>
      <div
        className="cancel-button button cancel-button"
        onClick={() => setShowSelectProfileInfor(false)}
      >
        Cancel
      </div>
    </div>
  );
};
