import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css"

const Timer = () => {
  const [time, settime] = useState(0);
  const [timeron, settimeron] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeron == true) {
      interval = setInterval(() => {
        settime((prevtime) => prevtime + 1);
      }, 10);
    }
    
    return () => clearInterval(interval);
  }, [timeron]);

  return (
    <div className={styles.container}>
      <div className={styles.clock}>
        <span>{"0" + Math.floor(time / 6000)} : </span>
        <span>{("0" + Math.round((time / 100) % 60)).slice(-2)} : </span>
        <span>{("0" + (time % 100)).slice(-2)}</span>
      </div>
      {/* <button onClick={() => settimeron(!timeron)}>
        {timeron ? "stop" : "start"}
      </button> */}
      {!timeron && time == 0 && (
        <button onClick={() => settimeron(true)}>Start</button>
      )}
      {timeron && time > 0 && (
        <button onClick={() => settimeron(false)}>Pause</button>
      )}
      {!timeron && time != 0 && (
        <button onClick={() => settimeron(true)}>Resume</button>
      )}
      {!timeron && time != 0 && (
        <button onClick={() => settime(0)}>Reset</button>
      )}
    </div>
  );
};

export default Timer;