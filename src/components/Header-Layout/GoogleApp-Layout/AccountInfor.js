import React, { useState, useEffect } from "react";
import { AiOutlineCamera } from "react-icons/ai";

export const AccountInfor = ({
  showSelectProfileInfor,
  setShowSelectProfileInfor,
}) => {
  const handleClickSelectProfileInfor = (event) => {
    if (!showSelectProfileInfor) {
      setShowSelectProfileInfor(true);
    }
  };

  return (
    <div className="avatar">
      <div className="avatar-container">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8mz-du1n-f8XasBqi83lJj61DJCkVHmN2qhwU=s128-b16-cc-rp-mo"
          alt="avatar"
          className="img-fluid"
        ></img>
        <div
          className="camera-container"
          onClick={handleClickSelectProfileInfor}
        >
          <AiOutlineCamera className="camera-setting-avatar" />
        </div>
      </div>
      <div className="infor-account">
        <div className="name-account">Dũng Huỳnh</div>
        <div className="email-account">tuongtukhoc@gmail.com</div>
      </div>
      <div className="manage-account">
        <div className="buffer-manage-account">
          <a href="https://myaccount.google.com/">Manage You Google Account</a>
        </div>
      </div>
    </div>
  );
};
