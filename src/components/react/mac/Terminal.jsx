// src/Terminal.js
import React, { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { AiOutlineClose } from "react-icons/ai";
const Terminal = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  return (
    <Draggable>
      <ResizableBox
        className={`terminal`}
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          overflow: "hidden",
          display: !isFullscreen ? "block" : "none",
        }}
        width={600}
        height={400}
        minConstraints={[300, 200]}
        maxConstraints={[800, 600]}
        resizeHandles={["se"]}
       
      >
        <div className="header">
          <button
            onClick={toggleFullscreen}
            style={{
              color: "white",
              border: "none",
              padding: "3px 10px",
            }}
          >
            {!isFullscreen && <AiOutlineClose />}
          </button>
        </div>
        <div className="body">
          <pre>~ $</pre>
          <p>Your terminal output here...</p>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default Terminal;
