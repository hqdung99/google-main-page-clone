import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  const [imageDefaultBackground, setImageDefaultBackground] = useState(
    "./images/background/tumblr_nynjrh0SUR1qhttpto1_1280.jpg"
  );

  const [backgroundImage, setBackgroundImage] = useState(
    imageDefaultBackground
  );
  const [defaultBackground, setDefaultBackground] = useState(false);

  useEffect(() => {
    if (defaultBackground) {
      setBackgroundImage(imageDefaultBackground);
      setDefaultBackground(false);
    }
  }, [defaultBackground]);

  console.log(backgroundImage);
  return (
    <div
      className="container-all"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Content />
      <Footer
        backgroundImage={backgroundImage}
        setBackgroundImage={setBackgroundImage}
        setDefaultBackground={setDefaultBackground}
        setImageDefaultBackground={setImageDefaultBackground}
      />
    </div>
  );
};
