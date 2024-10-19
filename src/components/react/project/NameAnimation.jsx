import React, { useRef, useState } from "react";

const NameLoadingEffect = ({ finalName }) => {
  const [displayedName, setDisplayedName] = useState(""); // State to update the displayed name
  const nameRef = useRef(); // To reference the name display

  const animateName = () => {
    let currentName = Array(finalName.length).fill(""); // Placeholder for characters
    const characters = "abcdefghijklmnopqrstuvwxyz"; // Characters for the loading effect

    const animateLetter = (index) => {
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex < characters.length) {
          currentName[index] = characters[charIndex]; // Show next letter in the sequence
          setDisplayedName(currentName.join("")); // Update the displayed name
          charIndex++;
        } else {
          clearInterval(interval); // Stop when the letter reaches its final value
          currentName[index] = finalName[index]; // Set the final letter from the name
          setDisplayedName(currentName.join(""));
        }
      }, 20); // Speed of the letter transitions
    };

    finalName.split("").forEach((_, i) => {
      setTimeout(() => animateLetter(i), i * 40); // Delay for each letter
    });
  };

  return (
    <span
      ref={nameRef}
      onMouseEnter={animateName} // Trigger animation on hover
      className="px-1 text-center"
    >
      {displayedName || finalName}
    </span>
  );
};

export default NameLoadingEffect;
