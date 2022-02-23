import React from "react";
import EndChallenge from "./EndChallenge";
import ChallengeData from "./ChallengeData";
import Logo from "../StartPage/Logo";
import Compliment from "./Compliment";

function ProgressPage() {
  return (
    <div>
      <Logo />
      <Compliment />
      <ChallengeData />
      <EndChallenge />
    </div>
  );
}

export default ProgressPage;
