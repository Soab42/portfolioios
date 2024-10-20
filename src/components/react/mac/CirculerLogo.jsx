import React from "react";

const CircularTextAndImage = () => {
  return (
    <div className="circular-container">
      {/* Circular Text */}
      <svg viewBox="0 0 300 300" className="circular-text">
        <path
          id="circlePath"
          d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
        />
        <text>
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Circular Text Effect Here
          </textPath>
        </text>
      </svg>

      {/* Circular Image */}
      <div className="circular-image">
        <img
          src="/assets/imgs/saif/saif-1.png"
          alt="Circular"
          className="image"
        />
      </div>

      <div className="circular-container">
        {/* Circular Image */}
        <div className="circular-image">
          <img
            src="https://via.placeholder.com/200"
            alt="Circular"
            className="image"
          />
        </div>

        {/* Circular Text */}
        <svg viewBox="0 0 300 300" className="circular-text">
          <path
            id="circlePath"
            d="M 150, 150 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
          />
          <text>
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              This is the text that aligns around the circular image.
            </textPath>
          </text>
        </svg>
      </div>

      <style>{`
        .circular-container {
        position: relative;
        width: 300px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        }

        .circular-text {
        position: absolute;
        width: 300px;
        height: 300px;
        }

        text {
        font-size: 16px;
        font-family: 'Arial', sans-serif;
        fill: #333;
        }

        .circular-image {
        position: absolute;
        width: 150px;
        height: 150px;
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

      `}</style>
    </div>
  );
};

export default CircularTextAndImage;
