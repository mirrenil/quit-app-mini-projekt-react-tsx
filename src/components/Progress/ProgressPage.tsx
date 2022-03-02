import React from "react";
import { Navigate } from "react-router-dom";
import { User } from "../../data";
import ErrorBoundary from "../../ErrorBoundary";
import ChallengeData from "./ChallengeData";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";
import MiniLogo from "./MiniLogo";
import "./Progress.css";

interface Props {
  userData?: User;
}

function ProgressPage(props: Props) {
  if (!props.userData) {
    return <Navigate to="/" />;
  }

  return (
    <div className="progress-page">
      <div className="progress-container">
        <ErrorBoundary>
          <div className="logo">
            <MiniLogo />
          </div>
        </ErrorBoundary>

        <div className="progress-sub-container">
          <Compliment name={props.userData.name} />
          <ErrorBoundary>
            <ChallengeData userData={props.userData} />
          </ErrorBoundary>
        </div>
        <EndChallengeButton />
      </div>
    </div>
  );
}

export default ProgressPage;
