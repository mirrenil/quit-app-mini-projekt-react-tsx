import React from "react";
import DaysCompleted from "./DaysCompleted";

interface Props {
  cigarettes: number,
}

function CigarettesNotSmoked(props: Props) {
  return (
    <div className="progress-div cigarettes-not-smoked-div">
      <h3>{props.cigarettes}</h3>
      <span>Cigarettes avoided.</span>
    </div>
  )
}

// function DaysWithoutSmoke(cigarettes: Number) {
//   return (cigarettes * DaysCompleted)
// }



export default CigarettesNotSmoked;
