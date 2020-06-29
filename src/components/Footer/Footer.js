import React, { useState, useEffect } from "react";
import "./Footer.scss";
import { FaPencilAlt } from "react-icons/fa";
import { CustomiseLayout } from "../Footer-Layout/CustomiseLayout/CustomiseLayout";

export const Footer = ({
  backgroundImage,
  setBackgroundImage,
  setDefaultBackground,
  setImageDefaultBackground,
}) => {
  const [showCustomizeLayout, setShowCustomiseLayout] = useState(false);

  return (
    <div className="edit-container-content">
      <div
        className="footer-round-buffer"
        title="Customise this page"
        onClick={() => {
          setShowCustomiseLayout(!showCustomizeLayout);
        }}
      >
        <FaPencilAlt />
      </div>
      {/* showCustomizeLayout */}
      {showCustomizeLayout && (
        <CustomiseLayout
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
          setDefaultBackground={setDefaultBackground}
          setShowCustomiseLayout={setShowCustomiseLayout}
          setImageDefaultBackground={setImageDefaultBackground}
        />
      )}
    </div>
  );
};
