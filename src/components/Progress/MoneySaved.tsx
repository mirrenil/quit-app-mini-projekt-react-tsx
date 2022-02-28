import React, { useEffect, useState } from "react";
import { User } from "../../data";

interface Props {
  userData: User;

}

function MoneySaved(props: Props) {
  const { price, cigarettes, start } = props.userData;
  // const [cigarettes, setPrice] = useState(0);
  
  // useEffect(() => {
  //   setPrice((props.cigarettes) => CalculateMoneySaved());
  // }, [setPrice]);

  return (
    <div className="progress-div monvey-saved-div">
      <h3>{price / 20 * cigarettes}:-</h3>
      <span>saved by not smoking.</span>
    </div>
  );
}

   //const moneySaved = {props.price};

export default MoneySaved;

//(props.cigarettesPrice / 20) * props.cigarettes);