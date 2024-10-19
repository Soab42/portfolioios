import React from "react";
import { useState } from "react";
import { nav } from "../../data/data";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  console.log(location);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="nav">
      <div className="icon">
        <h1>
          <a href="#">.syfuddhin</a>
        </h1>
      </div>
      <div className="listing">
        <ul
          className="list"
          style={{
            top: isActive ? "0" : "-3.5rem",
            opacity: isActive ? "1" : "0",
            transitionDelay: isActive ? ".3s" : ".2s",
          }}
        >
          {nav.map((item, index) => (
            <li
              key={index}
              className={location.hash == item.href ? "active" : ""}
              style={{
                top: isActive ? "0" : "-3.5rem",
                transitionDelay: `${index / 15}s`,
                background: isActive ? "" : "#98dad9",
              }}
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div
          id="hamburger"
          className={isActive ? "hamburger active " : " hamburger"}
          onClick={handleClick}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}
