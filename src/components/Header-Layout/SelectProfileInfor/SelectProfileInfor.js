import React, { useState, useEffect } from "react";
import "./SelectProfileInfor.scss";
import { MdClose } from "react-icons/md";
import { UploadPhotos } from "../GoogleApp-Layout/UploadPhotos";
import { YourPhotos } from "../YourPhotos/YourPhotos";
import { FooterSetAvatar } from "../FooterSetAvatar/FooterSetAvatar";

const UPLOAD_PHOTO = "UPLOAD_PHOTOS";
const YOUR_PHOTO = "YOUR_PHOTOS";

export const SelectProfileInfor = ({
  showSelectProfileInfor,
  setShowSelectProfileInfor,
}) => {
  const [active, setActive] = useState(UPLOAD_PHOTO);
  const [setProfilePhoto, setSetProfilePhoto] = useState(false);
  const [activeSetProfilePhoto, setActiveSetProfilePhoto] = useState(false);

  const handleClickActive = (event) => {
    if (event.target.className.includes("upload-photos")) {
      setActive(UPLOAD_PHOTO);
    } else if (event.target.className.includes("your-photos")) {
      setActive(YOUR_PHOTO);
    }
  };

  return (
    <div className="select-profile-infor-container-overlay">
      <div className="select-profile-infor-container-buffer">
        <div
          className="close-button"
          onClick={() => {
            setShowSelectProfileInfor(false);
          }}
        >
          <MdClose className="close-icon" />
        </div>
        <div className="title-select-profile-infor-container">
          <div className="text">Select profile photo</div>
        </div>
        <div className="select-status-container">
          <div
            className={
              active === UPLOAD_PHOTO
                ? "status upload-photos active"
                : "status  upload-photos"
            }
            onClick={(event) => handleClickActive(event)}
          >
            Upload Photos
          </div>
          <div
            className={
              active === YOUR_PHOTO
                ? "status your-photos active"
                : "status your-photos"
            }
            onClick={(event) => handleClickActive(event)}
          >
            Your Photos
          </div>
        </div>
        <div className="choose-photos-component-container">
          {active === UPLOAD_PHOTO && (
            <UploadPhotos
              setProfilePhoto={setProfilePhoto}
              setActiveSetProfilePhoto={setActiveSetProfilePhoto}
              setShowSelectProfileInfor={setShowSelectProfileInfor}
            />
          )}
          {active === YOUR_PHOTO && (
            <YourPhotos
              setProfilePhoto={setProfilePhoto}
              setActiveSetProfilePhoto={setActiveSetProfilePhoto}
            />
          )}
        </div>
        <div className="footer-container">
          <FooterSetAvatar
            setShowSelectProfileInfor={setShowSelectProfileInfor}
            setSetProfilePhoto={setSetProfilePhoto}
            activeSetProfilePhoto={activeSetProfilePhoto}
          />
        </div>
      </div>
    </div>
  );
};
