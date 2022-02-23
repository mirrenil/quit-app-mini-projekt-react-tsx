import React from "react";
import Logo from "./Logo";
import MotivationText from "./MotivationText";
import StartButton from "./StartButton";
import "./StartPage.css";

function StartPage() {
  return (
    <div className="startpage-style">
      <Logo />
      <MotivationText />
      <StartButton />
    </div>
  );
}

export default StartPage;
