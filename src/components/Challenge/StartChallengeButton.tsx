import React from "react";
import { Link } from "react-router-dom";
import "../StartPage/Button.css";

function ChallengeButton() {
  return (
    <div>
      <Link to="progressPage">
        <button className="btn">
          <span>CONFIRM</span>
        </button>
      </Link>

    </div>
  );
}


export default ChallengeButton;
