import React, { useState, useEffect, useRef } from "react";
import { GoogleApp } from "./GoogleApp-Layout/GoogleApp";
import "../../css/GoogleAppsContainer.scss";
import data from "../../data/icons/icons-google.json";
import { useOutsideAlerter } from "../Helpers/OutsideAlerter";

export const GoogleAppsContainer = ({ showGoogleApps, setShowGoogleApps }) => {
  const [heightContainer, setHeightContainer] = useState(460);

  useEffect(() => {
    if (window.innerHeight < 630) {
      setHeightContainer(window.innerHeight - 58 - 20);
    }
    function onResizeWindow() {
      if (window.innerHeight > 630) setHeightContainer(460);
      else setHeightContainer(window.innerHeight - 58 - 20);
    }
    window.onresize = onResizeWindow;
  }, []);

  const wrapperRefGoogleApp = useRef(null);
  useOutsideAlerter(wrapperRefGoogleApp, showGoogleApps, setShowGoogleApps);

  return (
    <div
      ref={wrapperRefGoogleApp}
      className="container-google-apps-container"
      style={{ height: heightContainer }}
    >
      <div className="google-apps-group group-1 row">
        {data["latitude-google-icons-group-1"].map((dataItem) => {
          return (
            <GoogleApp
              url={data["google-icons-link"]}
              name={dataItem.name}
              height={dataItem.height}
              key={dataItem.name}
              link={dataItem.link}
            />
          );
        })}
      </div>
      <div className="google-apps-group group-2 row">
        {data["latitude-google-icons-group-2"].map((dataItem) => {
          return (
            <GoogleApp
              url={data["google-icons-link"]}
              name={dataItem.name}
              height={dataItem.height}
              link={dataItem.link}
              key={dataItem.name}
            />
          );
        })}
      </div>
      <div className="more-from-google">
        <div className="buffer-more">
          <a href="https://about.google/intl/en-GB/products/?tab=rh">
            More from Google
          </a>
        </div>
      </div>
    </div>
  );
};
