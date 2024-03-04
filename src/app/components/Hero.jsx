// gsap text opacity fill animation on scroll
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const animateText = () => {
  const text = document.querySelectorAll(".about-me");

  const split = new SplitType(text, {
    types: "chars,lines",
  });

  gsap.from(split.chars, {
    scrollTrigger: {
      trigger: text,
      start: "top 38.7%",
      end: "bottom 20%",
      scrub: true,
      markers: true,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
};

const Hero = () => {
  useEffect(() => {
    animateText();
  }, []);

  return (
    <main className="h-[60dvh]">
      <div className="flex gap-5 h-full flex-col lg:flex-row ">
        <div className="lg:w-3/5 h-full bg-[#1c1c1c] rounded-3xl py-14 px-10 w-full flex flex-col text-white justify-between items-start">
          <div className="sm:h-36 sm:w-36 h-16 w-16 rounded-full relative aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww"
              fill
              className="rounded-full"
            />
          </div>
          <p className="sm:w-3/4 w-full sm:font-medium font-medium sm:text-5xl text-2xl tracking-normal about-me text-clip">
            Hi, I'm Rudra Patel, your friendly full-stack developer & Creative
            UI/UX Designer, crafting digital experiences blending creativity &
            tech seamlessly.
          </p>
        </div>
        <div className="lg:w-2/5 gap-y-5 flex flex-col h-full w-full">
          <div className="h-4/5 bg-[#1c1c1c] rounded-3xl"></div>
          <div className="h-1/5 bg-[#1c1c1c] rounded-3xl"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
