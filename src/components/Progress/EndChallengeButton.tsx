import React from "react";
import { Link } from "react-router-dom";
import "../StartPage/Button.css"

function EndChallengeButton() {
  return (

    <Link to="StartPage">
      <div>
        <Link to="startPage">
          <button className="btn">
            <span>STOP CHALLENGE</span>
          </button>
        </Link>
      </div>
    </Link>


  );
}

export default EndChallengeButton;
