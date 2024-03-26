"use client";
import Image from "next/image";
import Logo from "../public/logo.jpg";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function NavBar() {
  const animateElement = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(animateElement.current, { opacity: 0, duration: 1 }).to(
      animateElement.current,
      { opacity: 1, y: 5, duration: 1 }
    );

    tl.play();
  }, []);
  return (
    <>
      <div className="flex w-full justify-center bg-[#000] opcity-0 ">
        <div className="w-[80%] flex justify-center  " ref={animateElement}>
          <ul className=" w-[80%] flex p-[20px] justify-between">
            <li className="flex items-center uppercase text-white">work</li>
            <li className="flex items-center uppercase text-white">services</li>
            <li className="flex items-center uppercase text-white">Bazraa</li>
            <li className="flex items-center uppercase text-white">about</li>
            <li className="flex items-center uppercase text-white">Blog</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
