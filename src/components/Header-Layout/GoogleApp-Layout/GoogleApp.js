import React from "react";

export const GoogleApp = ({ url, name, height, link }) => {
  return (
    <div className="col-4 google-app-item">
      <a
        className="image-icon img-fluid"
        style={{
          backgroundImage: `url(${url})`,
          backgroundPositionX: 0,
          backgroundPositionY: -height,
        }}
        href={link}
      ></a>
      <div className="name-icon">{name}</div>
    </div>
  );
};
