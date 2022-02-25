import React from "react";
import ChallengeData from "./ChallengeData";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";
import MiniLogo from "./MiniLogo";
import "./Progress.css";

interface Props {
  data: any;
}

function ProgressPage(props: Props) {
  console.log(props.data);

  return (
    <div className="progress-page">
      <div className="progress-container">
      <div className="logo">
      <MiniLogo  />
      </div>
      <div className="progress-sub-container">
        <Compliment />
        <ChallengeData />
      </div>
      <EndChallengeButton />
    </div>
    </div>
  );
}

// function DaysCompleted(props: Props) {

// }

// function CalculateMoneySaved(props: Props) {

// }

// function DaysWithoutSmoke(props: Props) {

// }

export default ProgressPage;
