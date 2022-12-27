import React from "react";
import { useState, useEffect } from "react";
import { monthNames } from "../../utils/currentDate";
import styledTimer from "./Timer.module.css";

export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + 4);

  const deadline = `${
    monthNames[date.getMonth()]
  }, ${date.getDate()}, ${date.getFullYear()}`;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styledTimer.timer}>
      <p className={styledTimer.timer_element}>{days}D:</p>
      <p className={styledTimer.timer_element}>{hours}H:</p>
      <p className={styledTimer.timer_element}>{minutes}M:</p>
      <p className={styledTimer.timer_element}>{seconds}S</p>
    </div>
  );
}
