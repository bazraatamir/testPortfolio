"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const CountdownTimer = ({ targetDate }) => {
  const animateElement = useRef(null);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted or target date is reached
    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div
      className="w-100% flex justify-center  text-[100px] gap-[20px] "
      ref={animateElement}
    >
      {timeLeft.days > 0 && (
        <span className="uppercase text-white ">
          {formatTime(timeLeft.days)} days{" "}
        </span>
      )}
      <span className="uppercase text-white">
        {formatTime(timeLeft.hours)}:
      </span>
      <span className="uppercase text-white">
        {formatTime(timeLeft.minutes)}:
      </span>
      <span className="uppercase text-white">
        {formatTime(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default CountdownTimer;
