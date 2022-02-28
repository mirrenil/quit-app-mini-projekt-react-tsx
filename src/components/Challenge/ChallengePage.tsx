import React from "react";
import { User } from "../../data";
import ChallengeForm from "./ChallengeForm";
import "./ChallengePage.css";

interface Props {
  saveNewChallengeData: (user: User) => void;
}

function ChallengePage(props: Props) {

  return (
    <div className="challenge-page">
      <ChallengeForm saveNewChallengeData={props.saveNewChallengeData} />
    </div>
  );
}

export default ChallengePage;
