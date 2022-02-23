import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import ChallengePage from "./Challenge/ChallengePage";
import ProgressPage from "./Progress/ProgressPage";
import "./App.css";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="challengePage" element={<ChallengePage />} />
          <Route path="progressPage" element={<ProgressPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
