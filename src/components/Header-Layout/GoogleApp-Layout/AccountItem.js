import React from "react";
import "../../../css/AccountItem.scss";

export const AccountItem = ({ avatar, name, email }) => {
  return (
    <div className="account-item-container">
      <div className="account-item-avatar-container">
        <img src={avatar} alt="avatar" className="img-fluid"></img>
      </div>
      <div className="account-item-infor-container">
        <div className="account-item-infor-name">{name}</div>
        <div className="account-item-infor-email">{email}</div>
      </div>
    </div>
  );
};
