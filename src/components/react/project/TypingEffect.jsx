import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NameLoadingEffect from "./NameAnimation";

const TypingEffect = ({
  text = "welcome to my portfolio",
  duration = 0.15,
  stagger = 0.1,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = text.split(""); // Split text into characters

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration, // Speed of the typing effect
        stagger, // Delay between each character

        ease: "power1.inOut", // Ease for smoothness
      }
    );
  }, [text]);

  return (
    <span ref={textRef}>
      {text.split("").map((char, index) => (
        <span key={index}>
          <NameLoadingEffect finalName={char} />
        </span> // Each character gets wrapped in a span
      ))}
    </span>
  );
};

export default TypingEffect;
