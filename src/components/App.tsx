import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import { User } from "../data";
import "./App.css";
import ChallengePage from "./Challenge/ChallengePage";
import ChallengeData from "./Progress/ChallengeData";
import ProgressPage from "./Progress/ProgressPage";
import StartPage from "./StartPage/StartPage";

// const StartPage = lazy(() => import ("./StartPage/StartPage"))
// const ChallengePage = lazy(() => import("./Challenge/ChallengePage"));
// const ProgressPage = lazy(() => import("./Progress/ProgressPage"));

function App() {
  const navigate = useNavigate()
  console.log(navigate)
  const [challengeData, setChallengeData] = useState<User>()

  const newChallengeDataHandler = (enteredUserData: User) => {
    setChallengeData(enteredUserData);
    console.log(enteredUserData);
    navigate("progressPage")
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="challengePage" element={<ChallengePage saveNewChallengeData={newChallengeDataHandler} />} />
        <Route path="progressPage" element={<ProgressPage userData={challengeData}/>} />
        <Route path="*" element={<div style={{ position: "absolute", left: '50%', top: '50%', transform: 'translate(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem' }}>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
