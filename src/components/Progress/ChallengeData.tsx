import React from "react";
import { User } from "../../data";
import CigarettesNotSmoked from "./CigarettesNotSmoked";
import DaysCompleted from "./DaysCompleted";
import MoneySaved from "./MoneySaved";

interface Props {
  userData: User;
}

function ChallengeData({userData}: Props) {
  return (
    <div className="challenge-data-container">
      <DaysCompleted userData={userData}/>
      <div className="challenge-data-sub-container">
        <CigarettesNotSmoked cigarettes={userData.cigarettes} />
        <MoneySaved userData={userData} />
      </div>
    </div>
  );
}

export default ChallengeData;