import React from "react";

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

export default CigarettesNotSmoked;
