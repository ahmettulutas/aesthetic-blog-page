"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function BoxAnimations() {
  const component = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const sections = gsap.utils.toArray("section");
      sections.forEach((box, idx) => {
        gsap.to(box as HTMLElement, {
          y: 50,
          rotation: 360,
          opacity: 1,
          delay: `0.${idx * 10}`,
          repeat: -1,
          scrollTrigger: {
            trigger: box as HTMLElement,
            start: "bottom bottom",
            end: "top 20%",
            scrub: 0.5,
            // markers: true,
          },
        });
      });
    },
    { scope: component }
  );
  return (
    <div ref={component} className="flex gap-4">
      <section className="w-10 h-10 rounded-full bg-yellow-400 opacity-0"></section>
      <section className="w-10 h-10 rounded-full bg-yellow-400 opacity-0"></section>
      <section className="w-10 h-10 rounded-full bg-yellow-400 opacity-0"></section>
      <div className="bg-gray-200 h-[200vh]"></div>
    </div>
  );
}

export default BoxAnimations;
