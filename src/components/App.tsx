import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChallengePage from "./Challenge/ChallengePage";
import ProgressPage from "./Progress/ProgressPage";
import StartPage from "./StartPage/StartPage";

// const StartPage = lazy(() => import ("./StartPage/StartPage"))
// const ChallengePage = lazy(() => import("./Challenge/ChallengePage"));
// const ProgressPage = lazy(() => import("./Progress/ProgressPage"));



function App() {

  const [challengeData, setChallengeData] = useState()

  const newChallengeDataHandler = (transferedChallengeData: any) => {
    setChallengeData(transferedChallengeData);
  };

  console.log(challengeData);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="challengePage" element={<ChallengePage saveNewChallengeData={newChallengeDataHandler} />} />
          <Route path="progressPage" element={<ProgressPage data={challengeData}/>} />
          <Route path="*" element={<div style={{ position: "absolute", left: '50%', top: '50%', transform: 'translate(-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem' }}>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
