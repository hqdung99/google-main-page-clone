import React, { useState, useEffect } from "react";
import "./BackgroundOptionSpecificOption.scss";
import { TiTick } from "react-icons/ti";

export const BackgroundOptionSpecificOption = ({
  urlImage,
  urlImageSelected,
  setUrlImageSelected,
}) => {
  const [paddingOnClick, setPaddingOnClick] = useState("0px");
  const [choosen, setChoosen] = useState(false);

  useEffect(() => {
    if (urlImageSelected !== urlImage) {
      setPaddingOnClick("0px");
      setChoosen(false);
    }
  }, [urlImageSelected]);

  return (
    <div className="background-option-specific-option-container">
      <div className="background-option-specific-option-buffer">
        <div
          className="option-container"
          title="Lanscape"
          style={{ padding: paddingOnClick }}
          onClick={() => {
            setPaddingOnClick("15px");
            setUrlImageSelected(urlImage);
            setChoosen(true);
          }}
        >
          {choosen && <div className="choose-icon">✓</div>}
          <img
            src={urlImage.replace("WIDTH", "176").replace("HEIGHT", "176")}
            alt="Lanscape"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
};
