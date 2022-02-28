import React from "react";
import { Navigate } from "react-router-dom";
import { User } from "../../data";
import ChallengeData from "./ChallengeData";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";
import MiniLogo from "./MiniLogo";
import "./Progress.css";

interface Props {
  userData?: User;
}

function ProgressPage(props: Props) {
  if(!props.userData) {
    return <Navigate to="/" />
  }

  return (
    <div className="progress-page">
      <div className="progress-container">
      <div className="logo">
      <MiniLogo  />
      </div>
      <div className="progress-sub-container">
        <Compliment name={props.userData.name}/>
        <ChallengeData 
          userData={props.userData} 
        />
      </div>
      <EndChallengeButton />
    </div>
    </div>
  );
}

// function DaysCompleted(props: Props) {

// }




export default ProgressPage;
