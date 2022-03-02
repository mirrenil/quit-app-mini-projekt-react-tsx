import React from "react";

import "./Motivation.css";

function MotivationText() {
  return (
    <div className="motivation-container">
      <p className="motivation-header-style">Did you know?</p>
      <p className="motivation-body-style">
        Smoking shortens life by about <span>10</span> years and costs about{" "}
        <span>10 000:-</span> annuarly. Dont hesitate, live a longer and richer
        life by stoping today.
      </p>
    </div>
  );
}

export default MotivationText;
