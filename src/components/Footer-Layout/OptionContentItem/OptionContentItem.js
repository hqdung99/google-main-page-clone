import React, { useState, useEffect, useRef } from "react";
import "./OptionContentItem.scss";

export const OptionContentItem = ({
  nameContent,
  nameFile,
  urlImageExample,
  setShowOptions,
  setNameFileBackgroundSpecific,
  setTitle,
  setTitleMode,
}) => {
  const imgRef = useRef(null);
  const [countLoadImage, setCountLoadImage] = useState(0);
  return (
    <React.Fragment>
      <div className="option-content-item-container">
        <div
          className="option-content-item-buffer"
          onClick={() => {
            setShowOptions("BACKGROUND_SPECIFIC_OPTION");
            setNameFileBackgroundSpecific(nameFile);
            setTitle(nameContent);
            setTitleMode("SPECIFIC");
          }}
        >
          <div className="image-container" title={nameContent}>
            <img
              ref={imgRef}
              src={urlImageExample}
              className="img-fluid"
              alt={nameContent}
              onError={(err) => {
                // this.src = urlImageExample;
                if (countLoadImage < 10) {
                  imgRef.current.src = urlImageExample;
                  setCountLoadImage(countLoadImage + 1);
                }
                console.log(err);
              }}
            ></img>
          </div>
          <div className="title-container text-capitalize">{nameContent}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
