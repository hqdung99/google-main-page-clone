import React, { useState, useEffect } from "react";
import "./OptionItem.scss";
import { FaRegImage } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { MdPalette } from "react-icons/md";

export const OptionItem = ({ nameOption, onClick, active }) => {
  return (
    <div className="option-item-container">
      <div
        className={
          active ? "option-item-buffer option-active" : "option-item-buffer"
        }
        onClick={() => onClick()}
      >
        <div className="option-icon">
          {nameOption === "Background" && <FaRegImage />}
          {nameOption === "Shortcuts" && <BsLink />}
          {nameOption === "Colour and theme" && <MdPalette />}
        </div>
        <div className="option-name">{nameOption}</div>
      </div>
    </div>
  );
};
