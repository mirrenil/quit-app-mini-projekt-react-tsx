import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  age: number;
  cigarettes: number;
  price: number;
}

function ChallengeForm(props: Props) {

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [cigarettes, setCigarettes] = useState('');
  const [cigarettePrice, setCigarettePrice] = useState('');

  const userNameInputHandler = (e: any) => {
    setUserName(e.target.value);
  }

  const userAgeInputHandler = (e: any) => {
    setUserAge(e.target.value);
  }

  const cigaretteInputHandler = (e: any) => {
    setCigarettes(e.target.value);
  }

  const cigarettePriceInputHandler = (e: any) => {
    setCigarettePrice(e.target.value);
  }

  const submitHandler = (e: any) => {
    e.preventDefault();

    const userData = {
      name: userName,
      age: userAge,
      cigarettes: cigarettes,
      price: cigarettePrice,
    }

    console.log(userData);
  }

  return (
    <div className="challenge-form">
      <h3 className="form-title">Start New Challenge</h3>
      <form className="form-style" action="newUser" onSubmit={submitHandler}>
        <div className="form-inp">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={userNameInputHandler} />
        </div>
        <div className="form-inp">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" onChange={userAgeInputHandler} />
        </div>
        <div className="form-inp">
          <label htmlFor="cigarettes">Cigarettes per day</label>
          <input type="number" name="cigarettes" id="cigarettes" onChange={cigaretteInputHandler} />
        </div>
        <div className="form-inp">
          <label htmlFor="price">Price per pack</label>
          <input type="number" name="price" id="price" onChange={cigarettePriceInputHandler} />
        </div>
        <div className="form-btn">
          <Link to="ProgressPage">
            <button className="btn" type="submit">
              <span>CONFIRM</span>
            </button>
          </Link>
        </div>

      </form>
    </div>
  );
}

export default ChallengeForm;
