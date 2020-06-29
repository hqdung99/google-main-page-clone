import React, { useState, useEffect } from "react";
import "./BackgroundOptionSpecific.scss";
import { BackgroundOptionSpecificOption } from "../BackgroundOptionSpecificOption/BackgroundOptionSpecificOption";

export const BackgroundOptionSpecific = ({
  nameFileListBackgroundOption,
  setBackgroundImage,
}) => {
  const [listBackground, setListBackground] = useState([]);
  const [nameListBackground, setNameListBackground] = useState("");
  const [urlImageSelected, setUrlImageSelected] = useState("");

  useEffect(() => {
    loadData(
      "./data/link-images/data-images/" + nameFileListBackgroundOption + ".json"
    );
  }, [nameFileListBackgroundOption]);

  useEffect(() => {
    if (urlImageSelected !== "")
      setBackgroundImage(
        urlImageSelected.replace("WIDTH", "3840").replace("HEIGHT", "2160")
      );
  });

  async function loadData(nameFile) {
    const dataFetch = fetch(nameFile);
    const dataPromise = await dataFetch;
    const data = await dataPromise.json();
    setListBackground(data.list_link);
    setNameListBackground(data.name);
  }

  console.log("aaa", listBackground);

  return (
    <div className="background-specific-options-container">
      <div className="background-specific-options-buffer">
        <div className="container-fluid">
          <div className="row">
            {listBackground.map((item) => {
              return (
                <div className="col-4">
                  <BackgroundOptionSpecificOption
                    urlImage={item.url}
                    urlImageSelected={urlImageSelected}
                    setUrlImageSelected={setUrlImageSelected}
                    setBackgroundImage={setBackgroundImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
