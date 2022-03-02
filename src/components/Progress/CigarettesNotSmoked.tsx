import React from "react";
import { User } from "../../data";
// import DaysCompleted from "./DaysCompleted";

interface Props {
  userData: User;
}

function CigarettesNotSmoked(props: Props) {
  const { cigarettes, start } = props.userData;

  function diffDates(date1: Date, date2: Date) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
  }

  const daysPassed = diffDates(start, new Date())

  return (
    <div className="progress-div cigarettes-not-smoked-div">
      <h3>{cigarettes * daysPassed}</h3>
      <span>Cigarettes avoided.</span>
    </div>
  )
}

export default CigarettesNotSmoked;
