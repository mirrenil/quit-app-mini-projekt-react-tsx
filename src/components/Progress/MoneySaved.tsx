import React from "react";

interface Props {
  price: number,
}

function MoneySaved(props: Props) {
  return (
    <div className="progress-div monvey-saved-div">
      <h3>{props.price}:-</h3>
      <span>saved by not smoking.</span>
    </div>
  );
}

export default MoneySaved;
