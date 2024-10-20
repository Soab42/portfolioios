import React from "react";
import ImageSlider from "./ImageSlider";
import TypingEffect from "./project/TypingEffect";
import CircularTextAndImage from "./mac/CIrculerAbout";

export default function About() {
  return (
    <section id="about" className="about">
      {/* <h1 className="title">Details Of Mine</h1> */}
      <div className="content">
        <ImageSlider />
        <CircularTextAndImage />
        <div className="about-text">
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              lineHeight: "1.75",
              textShadow: "2px 2px 10px black",
              letterSpacing: "2px",
              width: "85%",
              textAlign: "justify",
              padding: "20px",
            }}
          >
            <TypingEffect
              stagger={0.05}
              text="I am a software developer with a passion for creating beautiful and
            functional web applications. I have a strong understanding of the
            latest web technologies and best practices. My expertise includes
            front-end frameworks like React, as well as back-end technologies
            such as Node.js and Express. I'm always eager to learn and adapt to
            new technologies, ensuring that I can deliver cutting-edge
            solutions. Whether it's crafting responsive user interfaces or
            optimizing server-side performance, I strive to create seamless
            digital experiences that exceed expectations."
            />
          </p>
        </div>
      </div>

      <style jsx>{`
        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          color: white;
          padding-inline: 15rem;
        }
      `}</style>
    </section>
  );
}
