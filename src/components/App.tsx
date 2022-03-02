import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { User } from "../data";
import "./App.css";
import ChallengePage from "./Challenge/ChallengePage";
import ProgressPage from "./Progress/ProgressPage";
import StartPage from "./StartPage/StartPage";

function App() {
  const navigate = useNavigate()
  const [challengeData, setChallengeData] = useState<User>();
  const [_, setDate] = useState(new Date())
  
  const newChallengeDataHandler = (enteredUserData: User) => {
    setChallengeData(enteredUserData);
    navigate("progressPage");
  };

  useEffect(() => {
    if (!challengeData) return;
    const { start } = challengeData;
    const timeoutDate = new Date(start)
    timeoutDate.setDate(start.getDate() + 1)
    
    const diffTime = Math.abs(new Date().getTime() - timeoutDate.getTime());
    console.log(timeoutDate);
    
    setTimeout(() => {
      setDate(new Date())
    }, diffTime);
  }, [])
  
  // useEffect(() => {
  //   const localData = localStorage.getItem('challengeData');
  //   if(localData) {
  //     setChallengeData(JSON.parse(localData));
  //   }
  // }, [])
  
  // useEffect(() => {
  //   if (!challengeData) return;
  //   localStorage.setItem('challengeData', JSON.stringify(challengeData))
  // });
  
  // useEffect(() => {
  //   if(!challengeData) return;
  //   navigate("progressPage");
  // })

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
