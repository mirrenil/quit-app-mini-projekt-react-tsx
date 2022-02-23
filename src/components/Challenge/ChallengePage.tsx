import React from "react";
import ChallengeForm from "./ChallengeForm";
import "./Challenge.css";
import MiniLogo from "../Progress/MiniLogo";

function ChallengePage() {
  return (
    <div className="challenge-form">
      <MiniLogo />
      <ChallengeForm name={""} age={0} cigarettes={0} price={0} />
    </div>
  );
}

export default ChallengePage;
