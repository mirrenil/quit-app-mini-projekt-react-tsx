import React from "react";
import CigarettesNotSmoked from "./CigarettesNotSmoked";
import DaysCompleted from "./DaysCompleted";
import MoneySaved from "./MoneySaved";

interface Props {
  cigarettes: number,
  price: number,
}

function ChallengeData(props: Props) {
  return (
    <div className="challenge-data-container">
      <DaysCompleted />
      <div className="challenge-data-sub-container">
        <CigarettesNotSmoked cigarettes={props.cigarettes} />
        <MoneySaved price={props.price}/>
      </div>
    </div>
  );
}

export default ChallengeData;