import React from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div
      className="container-all"
      style={{
        backgroundImage: `url(./images/background/bg-17.jpg)`,
      }}
    >
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
