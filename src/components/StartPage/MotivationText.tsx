import React, { useEffect, useState } from "react";
import "./Motivation.css";

function MotivationText() {
  const [_, setData] = useState('')
  const [message, setMessage] = useState('');

  const url = 'http://api.openweathermap.org/data/2.5/weather?lat=57.68719958071554&lon=11.92736153854119&units=metric&appid=18da5ffac75fea1bc2e9892511561dbc';

  useEffect(() => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const temp = data.main.temp
        setData(temp);
        if (temp < 0) {
          setMessage('Dont let the cold demotivate you, stop smoking today. Get dressed and enjoy a fresh breeze instead.');
        } else if (temp > 0 && temp < 10) {
          setMessage('A bit chill today? Why not take advantage of it and spend some time playing with friends. Leave your smoke in the trash')
        }
        else if (temp > 10 && temp < 20) {
          setMessage('IT is a wonderful Weather Today for you to stop Smoking!Take A walk and enjoy this day')
        } else if (temp > 20) {
          setMessage('Do you what is much better than smoking? swimming! its a hot day, try going to the beach')
        }
      })
  }, []);




  return (
    <div className="motivation-container">
      <p className="motivation-header-style">Did you know?</p>
      <p className="motivation-body-style">
        Smoking shortens life by about <span>10</span> years and costs about{" "}
        <span>10 000:-</span> annually. Dont hesitate, live a longer and richer
        life by stopping today.
      </p>
      <p className="motivation-body-style">{message}</p>
    </div>
  );
}

export default MotivationText;
