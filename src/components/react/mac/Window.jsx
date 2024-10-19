// src/Terminal.js
import React, { useState } from "react";

import Draggable from "react-draggable";

import MacToolbar from "../project/MacToolbar";
import ResizableComponent from "../Resizable";
const Window = ({
  children,
  title,
  width,
  height,
  x = 200,
  y = 100,
  minHeight,
  minWidth,
  resizable,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Draggable handle=".handle" defaultPosition={{ x, y }}>
      <div
        style={{
          position: "absolute",
          width: "fit-content",
        }}
      >
        <MacToolbar />
        {/* Drag Handle */}
        <div
          className="handle"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            cursor: "move",
            zIndex: 1,
            height: 28,
            width: width + 2 + "px",
            textAlign: "center",
            backgroundColor: "rgba(224, 224, 224, 0.967)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "monospace",
            textShadow: "0 0 2px black",
            textTransform: "uppercase",
            color: "white",
            userSelect: "none",
          }}
        >
          {title?.split("/")[2] || title}
        </div>
        {/* Resizable Component */}
        <ResizableComponent
          width={width}
          height={height}
          minWidth={minWidth}
          minHeight={minHeight}
          resizable={resizable}
        >
          {children}
        </ResizableComponent>
      </div>
    </Draggable>
  );
};

export default Window;
