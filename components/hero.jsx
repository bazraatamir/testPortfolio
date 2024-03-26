"use client";
import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "./countDown";

import gsap from "gsap";
function Hero() {
  const animateElement = useRef(null);
  const [countdownData, setCountdownData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setCountdownData(data));
    const tl = gsap.timeline();
    tl.from(animateElement.current, { opacity: 0, duration: 1 }).to(
      animateElement.current,
      { opacity: 1, scale: 1, y: -20, duration: 1 }
    );

    tl.play();
  }, []);
  const targetDate = "2024-03-28T23:59:59";
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col  justify-center items-center gap-[20px] ">
        <div className="flex flex-col  justify-center items-center">
          <h1
            className="uppercase text-white text-[30px] opacity-0"
            ref={animateElement}
          >
            Coming Soon
          </h1>
          {countdownData && <CountdownTimer targetDate={targetDate} />}
        </div>
      </div>
    </>
  );
}

export default Hero;
