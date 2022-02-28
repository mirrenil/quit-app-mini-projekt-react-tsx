import React from "react";
import { Link } from "react-router-dom";
import "../StartPage/Button.css"

function EndChallengeButton() {
  return (
      <div>
        <Link to="/">
          <button className="btn">
            <span>STOP CHALLENGE</span>
          </button>
        </Link>
      </div>
  );
}

export default EndChallengeButton;
