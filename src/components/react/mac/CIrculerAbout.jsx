import React from "react";

const CircularTextAndImage = () => {
  return (
    <div className="circular-container">
      <svg viewBox="0 0 300 300" className="circular-text">
        <path
          id="circlePath"
          d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
          fill="none"
          stroke="white"
          strokeWidth="0"
        />
        <text>
          <textPath
            href="#circlePath"
            startOffset="50%"
            textLength="200%"
            textAnchor="middle"
          >
            Soab Mahmud Syfuddhin. Softwer Developer.
          </textPath>
        </text>
      </svg>
      <div className="circular-image">
        <img
          src="/assets/imgs/saif/saif-1.png"
          alt="Circular"
          className="image"
        />
      </div>
      <style>{`
       .circular-container {
        position: relative;
        z-index: -1;
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .circular-text {
        position: absolute;
        top: 8rem;
        width: 300px;
        height: 300px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        animation: rotate 10s linear infinite;

        }
       
        text {
        font-size: 22px;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        fill: pink;

        }

        .circular-image {
        position: absolute;
        background-color: red;
        z-index: 1;
        width: 170px;   
        top: 12rem;
        height: 170px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        }
         @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
};

export default CircularTextAndImage;
