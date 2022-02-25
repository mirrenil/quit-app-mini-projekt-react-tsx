import React from "react";
import ErrorBoundary from "../../ErrorBoundary";
import Logo from "./Logo";
import MotivationText from "./MotivationText";
import StartButton from "./StartButton";
import "./StartPage.css";

function StartPage() {
  return (
    <div className="startpage-style">
      <Logo />
      <ErrorBoundary>
        <MotivationText />
      </ErrorBoundary>
      <StartButton />
    </div>
  );
}

export default StartPage;
