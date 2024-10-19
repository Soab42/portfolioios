import React from "react";
import "./project.css";
import MacToolbar from "./MacToolbar";
import Window from "../mac/Window";
import ThreeDText from "./ProjectTitle";
import TypingEffect from "./TypingEffect";
import { projects } from "../../../data/projects";
import { useParams } from "react-router-dom";
export default function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id == id);
  console.log(project);
  return (
    <div className="project">
      <div
        style={{
          width: "25rem",
          height: "17.5rem",
          positon: "absolute",
          top: "1.8rem",
          left: "25rem",
          // zIndex: "-1",
          border: "1px solid var(--secondary2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <ThreeDText
          text={project.title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Window
        height={528}
        width={1080}
        title={project.title}
        x={800}
        y={12}
        resizable={false}
      >
        <div className="live" style={{ width: "100%", height: "100%" }}>
          <iframe
            src={project.link}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backdropFilter: "blur(10px)",
              backgroundColor: "var(--bg)",
            }}
          ></iframe>
        </div>
      </Window>

      <Window
        height={250}
        width={300}
        title={"Technology"}
        x={80}
        y={12}
        resizable={false}
      >
        <div className="technology">
          <ul>
            {project.technologies.map((item, index) => (
              <li>
                <TypingEffect key={index} text={item} />
              </li>
            ))}
          </ul>
        </div>
      </Window>
      <Window
        height={250}
        width={780}
        title={"operation"}
        x={1100}
        y={580}
        resizable={false}
      >
        <div className="operation">
          <ul>
            {project.operation.map((item, index) => (
              <li>
                <TypingEffect key={index} text={item} />
              </li>
            ))}
          </ul>
        </div>
      </Window>
      <Window
        height={240}
        width={700}
        title={"usage"}
        x={80}
        y={300}
        resizable={false}
      >
        <div className="usage">
          <ul className="custom-list">
            {project.usage.map((item, index) => (
              <li>
                <TypingEffect key={index} text={item} />
              </li>
            ))}
          </ul>
        </div>
      </Window>
      <Window
        height={260}
        width={1000}
        title={"difficulties"}
        x={80}
        y={580}
        resizable={false}
      >
        <div className="difficulties">
          <ul>
            {project.difficulties.map((item, index) => (
              <li>
                <TypingEffect key={index} text={item} />
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  );
}
