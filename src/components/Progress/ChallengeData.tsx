import React from "react";
import CigarettesNotSmoked from "./CigarettesNotSmoked";
import DaysCompleted from "./DaysCompleted";
import MoneySaved from "./MoneySaved";

function ChallengeData() {
  return (
    <div>
      <DaysCompleted />
      <CigarettesNotSmoked />
      <MoneySaved />
    </div>
  );
}

export default ChallengeData;
