import { useEffect, useState } from "react";
import DMGLogo from "./assets/DMBLogo.png";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="container">
      <div className="header">
        <div className="logo-title">
          <img src={DMGLogo} alt="DMB Logo" />
          <h1>dannielle.dev</h1>
        </div>
        <h2>Digital Clock | REACT</h2>
        <a href="https://github.com/Dannielleeee28" target="_blank">
          Github
        </a>
      </div>
      <div className="clock-display">
        <h2>{formatTime()}</h2>
      </div>
    </div>
  );
}
export default DigitalClock;
