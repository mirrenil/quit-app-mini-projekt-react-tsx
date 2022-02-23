import React from "react";
import ChallengeData from "./ChallengeData";
import Logo from "../StartPage/Logo";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";

function ProgressPage() {
  return (
    <div className="">
      <Logo />
      <Compliment />
      <ChallengeData />
      <EndChallengeButton />
    </div>
  );
}

export default ProgressPage;
