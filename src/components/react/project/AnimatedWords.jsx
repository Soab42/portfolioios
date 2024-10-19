// src/AnimatedWords.js

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NameLoadingEffect from "./NameAnimation";

const AnimatedWords = ({ sentence }) => {
  const words = sentence.split(" ");

  return (
    <div className="container text-2xl">
      {words.map((word, index) => (
        <span key={index} className="word">
          <NameLoadingEffect finalName={word} />
        </span>
      ))}
    </div>
  );
};

export default AnimatedWords;
