import React from "react";
import ErrorBoundary from "../../ErrorBoundary";
import ChallengeData from "./ChallengeData";
import Compliment from "./Compliment";
import EndChallengeButton from "./EndChallengeButton";
import MiniLogo from "./MiniLogo";
import "./Progress.css";

function ProgressPage() {
  return (
    <div className="progress-page">
      <MiniLogo />
      <ErrorBoundary>
        <Compliment />
      </ErrorBoundary>
       <ErrorBoundary>
        <ChallengeData />
      </ErrorBoundary>
      
      <EndChallengeButton />
    </div>
  );
}

export default ProgressPage;
