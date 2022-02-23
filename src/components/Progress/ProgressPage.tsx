import React from "react";
import ChallengeData from "./ChallengeData";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";
import MiniLogo from "./MiniLogo";
import "./Progress.css";

function ProgressPage() {
  return (
    <div className="">
      <MiniLogo />
      <Compliment />
      <ChallengeData />
      <EndChallengeButton />
    </div>
  );
}

export default ProgressPage;
