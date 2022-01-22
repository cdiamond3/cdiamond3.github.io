import React from "react";
import Oneofones from "./components/About/Oneofones";
import MintArea from "./components/MintArea/MintArea";
import Slides from "./components/TeamSlides/Slides";
import "./App.css"
import Mission from "./components/Mission/Mission";

export default function App() {
  return (
    <div className="appContainer">
      <Mission/>
      <MintArea />
      <Oneofones />
      {/* <Slides /> */}
    </div>
  );
}
