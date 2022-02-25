import React from "react";
import CigarettesNotSmoked from "./CigarettesNotSmoked";
import DaysCompleted from "./DaysCompleted";
import MoneySaved from "./MoneySaved";


function ChallengeData() {
  return (
    <div className="challenge-data-container">
      <DaysCompleted />
      <div className="challenge-data-sub-container">
        <CigarettesNotSmoked />
        <MoneySaved/>
      </div>
    </div>
  );
}

export default ChallengeData;