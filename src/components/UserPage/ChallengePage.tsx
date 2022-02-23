import React from "react";
import Logo from "../StartPage/Logo";
import ChallengeButton from "./ChallengeButton";
import ChallengeForm from "./ChallengeForm";

function ChallengePage() {
  return (
    <div className="rootStyle">
      <Logo />
      <ChallengeForm name={""} age={0} cigarettes={0} price={0} />
      <ChallengeButton />
    </div>
  );
}

export default ChallengePage;
