import React, { useState, useEffect } from "react";
import "./CustomiseLayout.scss";
import { OptionItem } from "../OptionItem/OptionItem";
import { BackgroundOptions } from "../BackgroundOptions/BackgroundOptions";
import { ColourAndThemeOptions } from "../ColourAndThemeOptions/ColourAndThemeOptions";
import { ShortcutsOptions } from "../ShortcutsOptions/ShortcutsOptions";
import { MdKeyboardBackspace } from "react-icons/md";

const BACKGROUND = "Background";
const SHORTCUTS = "Shortcuts";
const COLOUR_AND_THEME = "Colour and theme";

const CUSTOMISE_MODE = "CUSTOMISE";
const SPECIFIC_MODE = "SPECIFIC";

const BACKGROUND_OPTION = "BACKGROUND_OPTION";
const BACKGROUND_SPECIFIC_OPTION = "BACKGROUND_SPECIFIC_OPTION";

export const CustomiseLayout = ({
  backgroundImage,
  setBackgroundImage,
  setDefaultBackground,
  setShowCustomiseLayout,
  setImageDefaultBackground,
}) => {
  const [contentMode, setContentMode] = useState(BACKGROUND);
  const [titleBackgroundMode, setTitleBackgroundMode] = useState(
    CUSTOMISE_MODE
  );
  const [title, setTitle] = useState("");
  const [nameFileBackgroundSpecific, setNameFileBackgroundSpecific] = useState(
    ""
  );
  const [showOptions, setShowOptions] = useState(BACKGROUND_OPTION);
  return (
    <div className="customise-layout-overlay">
      <div className="customise-layout-container">
        <div className="content-customise-container">
          <div className="option-bar-container">
            <div className="title-option-bar-container"></div>
            <div className="content-option-bar-container">
              <OptionItem
                onClick={() => {
                  setContentMode(BACKGROUND);
                }}
                nameOption={BACKGROUND}
                active={contentMode === BACKGROUND}
              />
              <OptionItem
                onClick={() => setContentMode(SHORTCUTS)}
                nameOption={SHORTCUTS}
                active={contentMode === SHORTCUTS}
              />
              <OptionItem
                onClick={() => setContentMode(COLOUR_AND_THEME)}
                nameOption={COLOUR_AND_THEME}
                active={contentMode === COLOUR_AND_THEME}
              />
            </div>
          </div>
          <div className="display-content-container">
            {(titleBackgroundMode === CUSTOMISE_MODE ||
              contentMode === SHORTCUTS ||
              contentMode === COLOUR_AND_THEME) && (
              <div className="title-content-container">Customise this page</div>
            )}
            {titleBackgroundMode === SPECIFIC_MODE &&
              contentMode === BACKGROUND && (
                <div className="title-content-container">
                  <div
                    className="back-to-customise"
                    onClick={() => {
                      setTitle("");
                      setTitleBackgroundMode(CUSTOMISE_MODE);
                      setShowOptions(BACKGROUND_OPTION);
                    }}
                  >
                    <MdKeyboardBackspace />
                  </div>
                  {title}
                </div>
              )}
            <div className="option-content-container">
              {contentMode === BACKGROUND && (
                <BackgroundOptions
                  setTitle={setTitle}
                  setTitleMode={setTitleBackgroundMode}
                  showOptions={showOptions}
                  setShowOptions={setShowOptions}
                  setBackgroundImage={setBackgroundImage}
                  nameFileBackgroundSpecific={nameFileBackgroundSpecific}
                  setNameFileBackgroundSpecific={setNameFileBackgroundSpecific}
                />
              )}
              {contentMode === SHORTCUTS && <ShortcutsOptions />}
              {contentMode === COLOUR_AND_THEME && <ColourAndThemeOptions />}
            </div>
          </div>
        </div>
        <div className="button-customise-container">
          <button
            className="button cancel-button"
            onClick={() => {
              setDefaultBackground(true);
              setShowCustomiseLayout(false);
            }}
          >
            Cancel
          </button>
          <button
            className="button done-button"
            onClick={() => {
              setShowCustomiseLayout(false);
              setDefaultBackground(false);
              setImageDefaultBackground(backgroundImage);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
