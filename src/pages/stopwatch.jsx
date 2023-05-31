import { useEffect, useState } from "react";
import "./stopwatch.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const [prevDuration, setPrevDuration] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false);
      setPrevDuration(
        prevDuration + (new Date().getTime() - startTime.getTime()) / 1000
      );
      setDuration(0);
    } else {
      setStartTime(new Date());
      setIsRunning(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        const dur = (new Date().getTime() - startTime.getTime()) / 1000;
        setDuration(dur);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, isRunning, startTime]);

  const handleReset = () => {
    setIsRunning(false);
    setStartTime(null);
    setDuration(0);
    setPrevDuration(0);
  };

  const getFormattedElapsedTime = () => {
    const totalTime = prevDuration + duration;
    const hours = Math.floor(totalTime / 3600);
    const minutes = String(Math.floor(totalTime / 60)).padStart(2, "0");
    const seconds = String(Math.floor(totalTime % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="sw_container">
      <div className="sw_main">
        <span className="sw_heading">TIMER</span>
        <span className="sw_timer">
          <span className="sw_timer__text">
            {prevDuration + duration ? getFormattedElapsedTime() : "0:00"}
          </span>
        </span>
        <button className="sw_reset" onClick={handleReset}>
          <span className="fa-solid fa-rotate-right fa-flip-horizontal"></span>
        </button>
        <button className="sw_startStop" onClick={handleToggle}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
