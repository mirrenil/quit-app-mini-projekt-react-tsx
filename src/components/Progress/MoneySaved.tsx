import React from "react";
import { User } from "../../data";

interface Props {
  userData: User;
}

function MoneySaved(props: Props) {
  const { price, cigarettes, start } = props.userData;

  function diffDates(date1: Date, date2: Date) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
  }

  const daysPassed = diffDates(start, new Date());

  return (
    <div className="progress-div monvey-saved-div">
      <h3>{(price / 20 * cigarettes) * daysPassed}:-</h3>
      <span>saved by not smoking.</span>
    </div>
  );
}

export default MoneySaved;