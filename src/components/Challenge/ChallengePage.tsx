import React from "react";
import Logo from "../StartPage/Logo";
import ChallengeForm from "./ChallengeForm";
import StartChallengeButton from "./StartChallengeButton";
import "./Challenge.css";

function ChallengePage() {
  return (
    <div className="challenge-form">
      <Logo />
      <ChallengeForm name={""} age={0} cigarettes={0} price={0} />
      <StartChallengeButton />
    </div>
  );
}

export default ChallengePage;
