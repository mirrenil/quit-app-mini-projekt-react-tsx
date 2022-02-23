import React from "react";
import ChallengeForm from "./ChallengeForm";
import "./ChallengePage.css";

function ChallengePage() {
  return (
    <div className="challenge-page">
      <ChallengeForm name={""} age={0} cigarettes={0} price={0} />
    </div>
  );
}

export default ChallengePage;
