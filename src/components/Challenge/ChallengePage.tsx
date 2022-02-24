import React from "react";
import ChallengeForm from "./ChallengeForm";
import "./ChallengePage.css";

interface Props {
  saveNewChallengeData: any;
}

function ChallengePage(props: Props) {

  const newChallengeDataHandler = (enteredChallengeData: any) => {
    const challengeData = {
      ...enteredChallengeData
    };
    props.saveNewChallengeData(challengeData);
  }

  return (
    <div className="challenge-page">
      <ChallengeForm saveNewChallengeData={newChallengeDataHandler} />
    </div>
  );
}

export default ChallengePage;
