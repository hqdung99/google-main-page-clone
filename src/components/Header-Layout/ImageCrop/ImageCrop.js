import React, { useState, useEffect, useRef } from "react";
import "./ImageCrop.scss";
import "cropperjs/dist/cropper.min.css";
import Cropper from "react-cropper";

export const ImageCrop = ({ source, width }) => {
  const inputEl = useRef(null);

  //   const image = useRef(null);
  //   const [src, setSrc] = useState("");
  //   const [showCropper, setShowCropper] = useState(false);

  //   const handleClickCrop = (event) => {
  //     const image = inputEl.current.cropper
  //       .getCroppedCanvas({ maxWidth: 1000, maxHeight: 1000 })
  //       .toDataURL("image/png");
  //     setSrc(image);
  //   };

  return (
    <div className="image-crop-container">
      {/* <button onClick={(event) => handleClickCrop(event)}>crop</button> */}
      <div className="image-crop-gallery">
        {/* <img ref={image} src={src} style={{ width: "100px", height: "auto" }} /> */}
        <div className="gallery" style={{ width: width }}>
          <Cropper
            style={{ height: "100%", width: "auto" }}
            aspectRatio={1 / 1}
            dragMode={"none"}
            viewMode={3}
            responsive={false}
            zoomable={false}
            highlight={true}
            src={source}
            ready={() => {}}
            crop={() => {
              console.log("crop");
            }}
            ref={inputEl}
          />
        </div>
      </div>
    </div>
  );
};
