import React, { useState } from "react";

const ResizableComponent = ({
  children,
  width = 1400,
  height = 600,
  minWidth = 300,
  minHeight = 200,
  resizable = true,
}) => {
  const [size, setSize] = useState({ width, height });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState({ width: 200, height: 200 });

  const handleMouseDown = (e, direction) => {
    setIsResizing(true);
    setResizeDirection(direction);
    setInitialMousePos({ x: e.clientX, y: e.clientY });
    setInitialSize(size);
  };

  const handleMouseMove = (e) => {
    if (!isResizing || !resizable) return;

    const dx = e.clientX - initialMousePos.x;
    const dy = e.clientY - initialMousePos.y;

    let newWidth = initialSize.width;
    let newHeight = initialSize.height;

    if (resizeDirection === "diagonal") {
      newWidth = initialSize.width + dx;
      newHeight = initialSize.height + dy;
    } else if (resizeDirection === "horizontal") {
      newWidth = initialSize.width + dx;
    } else if (resizeDirection === "vertical") {
      newHeight = initialSize.height + dy;
    }

    // Apply minimum size constraints
    if (newWidth < minWidth) newWidth = minWidth;
    if (newHeight < minHeight) newHeight = minHeight;

    setSize({ width: newWidth, height: newHeight });
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setResizeDirection(null);
  };

  return (
    <div
      style={{
        width: size.width,
        height: size.height,

        position: "relative",
        top: "0",
        left: "0",
        overflow: "hidden",
        border: "1px solid var(--secondary2)",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Diagonal resize handle */}
      <div
        style={{
          position: "absolute",
          width: "98%",
          height: "20px",
          bottom: 0,
          left: 0,
          cursor: resizable && "row-resize",
          zIndex: 1,
        }}
        onMouseDown={(e) => handleMouseDown(e, "vertical")}
      />
      {/* corner */}
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          bottom: 0,
          right: 0,
          cursor: resizable && "nwse-resize",
          zIndex: 1,
        }}
        onMouseDown={(e) => handleMouseDown(e, "diagonal")}
      />
      {/* Horizontal resize handle */}
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "97%",
          top: 0,
          right: 0,
          zIndex: 1,
          cursor: resizable && "col-resize",
        }}
        onMouseDown={(e) => handleMouseDown(e, "horizontal")}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          position: "relative",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(10px)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ResizableComponent;
