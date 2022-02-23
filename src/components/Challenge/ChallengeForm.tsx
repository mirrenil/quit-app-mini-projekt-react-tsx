import React, { useState } from "react";



interface Props {
  name: string;
  age: number;
  cigarettes: number;
  price: number;
}

function ChallengeForm(props: Props) {

  const [userName, setUserName()] = useState('');
  const [userAge, setUserAge()] = useState('');
  const [cigarette, setCigarette()] = useState('');
  const [cigarettePrice, setCigarettePrice()] = useState('');

  const userNameInputHandler = (e) => {
    setUserName(e.target.value);
  }

  const userAgeInputHandler = (e) => {
    setUserAge(e.target.value);
  }

  const cigaretteInputHandler = (e) => {
    setCigarette(e.target.value);
  }

  const cigarettePriceInputHandler = (e) => {
    setCigarette(e.target.value);
  }

  const newUserDataHandler = () => {
    const userData = {
      userName: userName,

    }
  }

  return (
    <div className="challenge-form">
      <h3>Start new challenge</h3>
      <form action="newUser" onSubmit={newUserDataHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={userNameInputHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={userAgeInputHandler} />
        <label htmlFor="cigarettes">Cigarettes per day</label>
        <input type="number" name="cigarettes" id="cigarettes" onChange={cigaretteInputHandler} />
        <label htmlFor="price">Price per pack</label>
        <input type="number" name="price" id="price" onChange={cigarettePriceInputHandler} />
      </form>
    </div>
  );
}

export default ChallengeForm;
