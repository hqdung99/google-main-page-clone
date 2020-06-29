import React, { useState, useEffect } from "react";
import "./Content.scss";
import { AiOutlineSearch } from "react-icons/ai";
import "../Content-Layout/MostVisitedPageItem/MostVisitedPageItem";
import { MostVisitedPageItem } from "../Content-Layout/MostVisitedPageItem/MostVisitedPageItem";
import { EditShortcut } from "../Content-Layout/EditShortcut/EditShortcut";
import { AddItemMostVisitedPage } from "../Content-Layout/AddItemMostVisitedPage/AddItemMostVisitedPage";

export const Content = () => {
  const listMostVisitedPage = [
    { name: "Stack Overflow", url: "stackoverflow.com" },
    { name: "Youtube", url: "youtube.com" },
    { name: "Gmail", url: "mail.google.com" },
    { name: "React JS", url: "reactjs.org" },
    { name: "Github", url: "github.com" },
    { name: "Firebase", url: "firebase.google.com" },
    { name: "Translate", url: "translate.google.com" },
  ];

  const [addItemOption, setAddItemOption] = useState(false);
  const [editShortcutMode, setEditShortcutMode] = useState("Shortcut");
  const [showEditShortcut, setShowEditShortcut] = useState(false);
  const [currentEditShortcut, setCurrentEditShortcut] = useState({
    name: "",
    url: "",
  });

  const [stateListMostVisitedPage, setStateListMostVisitedPage] = useState(
    listMostVisitedPage
  );

  useEffect(() => {
    setAddItemOption(stateListMostVisitedPage.length < 8);
  }, [stateListMostVisitedPage]);

  return (
    <div className="container-content">
      <div className="content-item logo">
        <div className="google-logo-container"></div>
      </div>
      <div className="content-item search-box">
        <div className="input-buffer">
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Search Google or type URL" />
          </div>
          <div className="record-box"></div>
        </div>
      </div>
      <div className="content-item user-mosted-box">
        <div className="most-visited-page-container">
          <div className=" container">
            <div className="row">
              {stateListMostVisitedPage.map(({ name, url }) => {
                return (
                  <MostVisitedPageItem
                    name={name}
                    link={url}
                    showEditShortcut={showEditShortcut}
                    setShowEditShortcut={setShowEditShortcut}
                    setCurrentEditShortcut={setCurrentEditShortcut}
                    setEditShortcutMode={setEditShortcutMode}
                  />
                );
              })}
              {addItemOption && (
                <AddItemMostVisitedPage
                  name="Add Item"
                  link={""}
                  showEditShortcut={showEditShortcut}
                  setShowEditShortcut={setShowEditShortcut}
                  setCurrentEditShortcut={setCurrentEditShortcut}
                  setEditShortcutMode={setEditShortcutMode}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {showEditShortcut && (
        <EditShortcut
          nameEdit={editShortcutMode}
          currentEditShortcut={currentEditShortcut}
          setCurrentEditShortcut={setCurrentEditShortcut}
          showEditShortcut={showEditShortcut}
          setShowEditShortcut={setShowEditShortcut}
          stateListMostVisitedPage={stateListMostVisitedPage}
          setStateListMostVisitedPage={setStateListMostVisitedPage}
        />
      )}
    </div>
  );
};
