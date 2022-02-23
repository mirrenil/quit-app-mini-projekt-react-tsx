import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function StartButton() {
  return (
    <Link to="StartPage">
      <div>
        <Link to="challengePage">
          <button className="btn">
            <span>START</span>
          </button>
        </Link>
      </div>
    </Link>
  );
}

export default StartButton;
