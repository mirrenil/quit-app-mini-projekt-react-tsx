import React, { useState } from "react";
import { Link } from "react-router-dom";
import MiniLogo from "../Progress/MiniLogo";
import './Challenge.css'

interface Props {
  saveNewChallengeData: any;
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

    props.saveNewChallengeData(userData);
  }

  return (
    <form className="form-style" action="newUser" onSubmit={submitHandler}>
      <div>
        <MiniLogo />
      </div>
      <div className="form-container">
        <legend className="form-title">Start New Challenge</legend>
        <div className="form-inp">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={userNameInputHandler} />
        </div>
        <div className="form-inp">
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" onChange={userAgeInputHandler} />
        </div>
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
<<<<<<< HEAD
        <Link to="challengeForm">
          <div className="form-btn">
            <Link to="progressPage">
              <button className="btn" type="submit">
                <span>CONFIRM</span>
              </button>
            </Link>
          </div>
        </Link>
      </form>
    </div>
=======
      </div>
      <div className="form-btn">
        {/* <Link to="ProgressPage"> */}
          <button className="btn" type="submit">
            <span>CONFIRM</span>
          </button>
        {/* </Link> */}
      </div>
    </form>
>>>>>>> 7ab579d5686e61e366086d447b8deb52e99a4777
  );
}

export default ChallengeForm;
