import React from "react";

interface Props {
  name: string;
  age: number;
  cigarettes: number;
  price: number;
}

function ChallengeForm(props: Props) {
  return (
    <div>
      <h3>Start new challenge</h3>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" />
        <label htmlFor="cigarettes">Cigarettes per day</label>
        <input type="number" name="cigarettes" id="cigarettes" />
        <label htmlFor="price">Price per pack</label>
        <input type="number" name="price" id="price" />
      </form>
    </div>
  );
}

export default ChallengeForm;
