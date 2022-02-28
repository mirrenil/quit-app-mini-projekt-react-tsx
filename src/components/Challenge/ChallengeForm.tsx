import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../data";
import MiniLogo from "../Progress/MiniLogo";
import './Challenge.css'

interface Props {
  saveNewChallengeData: (user: User) => void ;
}

function ChallengeForm(props: Props) {

  const [userName, setUserName] = useState('');
  const [cigarettes, setCigarettes] = useState('');
  const [cigarettePrice, setCigarettePrice] = useState('');

  const userNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  // const userAgeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUserAge(e.target.value);
  // }

  const cigaretteInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCigarettes(e.target.value);
  }

  const cigarettePriceInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCigarettePrice(e.target.value);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    
    const userData: User = 
        {
        name: userName,
        cigarettes: Number(cigarettes),
        price: Number(cigarettePrice),
        start: new Date()
        };
        console.log(userData);
      props.saveNewChallengeData(userData);
  }

  return (
    <form className="form-style" onSubmit={submitHandler}>
      <div>
        <MiniLogo />
      </div>
      <div className="form-container">
        <legend className="form-title">Start New Challenge</legend>
        <div className="form-inp">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={userNameInputHandler} />
        </div>
        {/* <div className="form-inp">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" onChange={userAgeInputHandler} />
        </div> */}
        <div className="form-smoke-container">
          <div className="form-inp-smoke">
            <label htmlFor="cigarettes">Cigarettes /day</label>
            <input type="number" name="cigarettes" id="cigarettes" onChange={cigaretteInputHandler} />
          </div>
          <div className="form-inp-smoke">
            <label htmlFor="price">Price /pack</label>
            <input type="number" name="price" id="price" onChange={cigarettePriceInputHandler} />
          </div>
        </div>
      </div>
      <div className="form-btn">
        {/* <Link to="/ProgressPage"> */}
          <button className="btn" type="submit">
            <span>CONFIRM</span>
          </button>
        {/* </Link> */}
      </div>
    </form>
  );
}

export default ChallengeForm;
