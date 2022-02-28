import React, { useEffect, useState } from "react";
import { User } from "../../data";

interface Props {
  userData: User;
}

 function DaysCompleted({userData}: Props) {
  const [days, setCount] = useState(null);

  useEffect(() => {
    fetch("//www.tickcounter.com/static/js/loader.js")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setCount(data)
    })
  })

  function diffDates(date1: Date, date2: Date) {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
  }

  const daysPassed = diffDates(userData.start, new Date())

  return (
    <div className="progress-div days-completed-div">
      <h3>{daysPassed} Days</h3>
      <p>Completed without having a smoke.</p>
    </div>
  );
}

export default DaysCompleted;
