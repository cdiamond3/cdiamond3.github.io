import React from "react";
import Oneofones from "./components/About/Oneofones";
import MintArea from "./components/MintArea/MintArea";
import Mission from "./components/Mission/Mission";
import Slides from "./components/TeamSlides/Slides";

export default function App() {
  return (
    <div>
      <MintArea />
      <Oneofones />
      <Slides />
    </div>
  );
}
