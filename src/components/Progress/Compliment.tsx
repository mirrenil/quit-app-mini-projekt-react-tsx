import React from "react";

interface Props {
  name: string
}

function Compliment(props: Props) {
  return (
    <div className="compliment-div">
      <p>You're doing great </p>
      <h3>{props.name}</h3>

    </div>
  );
}
export default Compliment;
