import React, { useState, useEffect } from "react";
import "../../../css/UploadPhotos.scss";
import "dropzone/dist/dropzone";
import "dropzone/dist/dropzone.css";
import { firebase } from "../../../firebase/index";
import { BsCardImage } from "react-icons/bs";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ImageCrop } from "../ImageCrop/ImageCrop";

const START = "START";
const UPLOADING = "UPLOADING";
const DISPLAY = "DISPLAY";

export const UploadPhotos = () => {
  // show hight light when drag and drop image
  const [showHightLight, setShowHightLight] = useState(false);
  // value of progress bar
  const [progressValue, setProgressValue] = useState(0);
  // status, what happen: wait for drop image, uploading, show image
  const [status, setStatus] = useState(START);
  // path of file
  const [source, setSource] = useState("");
  // width of image when you width to showImage status
  const [width, setWidth] = useState("100%");

  // prevent Default
  const preventDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  // use to get width and height of image when you just know path of file
  function findHHandWW() {
    const imgHeight = this.height;
    const imgWidth = this.width;

    const dropAreaHeight = document.getElementsByClassName("drop-area")[0]
      .offsetHeight;
    console.log("dropArea", dropAreaHeight);
    const newWidth = (((imgWidth * dropAreaHeight) / imgHeight) * 80) / 100;
    setWidth(newWidth);
    return true;
  }

  function showImage(imgPath) {
    var myImage = new Image();
    myImage.name = imgPath;
    myImage.onload = findHHandWW;
    myImage.src = imgPath;
  }

  // setup before witch to preview mode
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      showImage(reader.result);
      setSource(reader.result);
    };

    setStatus(DISPLAY);
  };

  // handle when you get files
  const handlesFiles = (files) => {
    const listFiles = [...files];
    handleUpload(listFiles[0]);
  };

  // handle you drop file
  const handleDrop = (event) => {
    const data = event.dataTransfer;
    const files = data.files;

    handlesFiles(files);
  };

  // prevent default behavious when you drop file
  useEffect(() => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.getElementsByTagName("body")[0].addEventListener(
        eventName,
        (event) => {
          event.preventDefault();
        },
        false
      );
    });
  }, []);

  // handle upload file to firebase
  const handleUpload = (file) => {
    setStatus(UPLOADING);
    console.log("Haha");
    // Create a storage ref
    var storeRef = firebase.storage().ref("images/" + file.name);

    // Upload file
    var task = storeRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if (percentage - progressValue > 5 || percentage === 100) {
          setProgressValue(percentage);
        }
      },
      function error(err) {
        console.log(err);
      },
      function complete() {
        setTimeout(() => {
          previewFile(file);
        }, 2000);
      }
    );
  };

  return (
    <div className="upload-photos-component">
      <div
        className={showHightLight ? "drop-area highlight" : "drop-area"}
        onDragEnter={(event) => {
          preventDefault(event);
          setShowHightLight(true);
        }}
        onDragOver={(event) => {
          preventDefault(event);
          setShowHightLight(true);
        }}
        onDragLeave={(event) => {
          preventDefault(event);
          setShowHightLight(false);
        }}
        onDrop={(event) => {
          preventDefault(event);
          setShowHightLight(false);
          handleDrop(event);
        }}
      >
        {/* status === START */}
        {status === START && (
          <form className="my-form">
            <input
              type="file"
              id="fileElem"
              multiple={false}
              accept="image/*"
              onChange={(event) => {
                handlesFiles(event.target.files);
              }}
            ></input>
            <label
              className={showHightLight ? "button on-drop" : "button"}
              htmlFor="fileElem"
            >
              <div class="background-label-upload">
                <BsCardImage className="image-icon" />
                <div className="big-text text">Drag a profile photo here</div>
                <div className="small-text text">- or -</div>
                <div className="select-button">
                  Select a photo from your computer
                </div>
              </div>
            </label>
          </form>
        )}
        {/* status === UPLOADING */}
        {status === UPLOADING && (
          <ProgressBar
            value={Math.floor(progressValue)}
            className="progress-bar-call"
          />
        )}
        {/* status === DISPLAY file={image}*/}
        {status === DISPLAY && <ImageCrop source={source} width={width} />}
      </div>
    </div>
  );
};
