import React from "react";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skill">
      {/* <h1 className="title">Skills and Tools</h1> */}
      <div className="skill">
        {skills?.map((skill) => (
          <div
            className="skillCard"
            key={skill?.name}
            style={{ opacity: skill.levelPercent / 100 }}
          >
            {/* <img src={skill?.icon} alt={skill?.name} /> */}
            <div className="icon">{skill?.icon}</div>
            <h1>{skill?.name}</h1>
            <p>{skill?.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
