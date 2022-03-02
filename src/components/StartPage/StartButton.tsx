import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";
import "./Button.css";
function StartButton() {
  return (
    <ErrorBoundary>
      <Link to="StartPage">
        <div>
          <Link to="challengePage">
            <button className="btn">
              <span>START</span>
            </button>
          </Link>
        </div>
      </Link>
    </ErrorBoundary>
  );
}

export default StartButton;
