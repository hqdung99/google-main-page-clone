import React, { useState, useEffect } from "react";
import "./AddItemMostVisitedPage.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

export const AddItemMostVisitedPage = ({
  name,
  link,
  showEditShortcut,
  setShowEditShortcut,
  setCurrentEditShortcut,
  setEditShortcutMode,
}) => {
  const [sourceIcon, setSourceIcon] = useState(`https://${link}/favicon.ico`);
  return (
    <div className="col-3 most-visited-page-item" title={name}>
      <div
        className="most-visited-page-item-buffer"
        onClick={() => {
          setCurrentEditShortcut({ name: "", url: "" });
          setEditShortcutMode("Add shortcut");
          setShowEditShortcut(true);
        }}
      >
        <a
          className="most-visited-page-item-link"
          href={"https://" + link + "/"}
        >
          <div className="background-container-icon">
            <div className="circle-background">
              <AiOutlinePlus />
            </div>
          </div>
          <div className="most-visited-page-item-name">{name}</div>
        </a>
      </div>
    </div>
  );
};
