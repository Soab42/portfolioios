import React, { useState } from "react";

const CustomContextMenu = ({ menuPosition, setMenuPosition }) => {
  const handleMenuOption = (option) => {
    console.log(`${option} clicked`);
    setMenuPosition(null); // Close the menu after an option is clicked
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        zIndex: 1000,
        position: "absolute",
      }}
    >
      {menuPosition && (
        <ul
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            listStyle: "none",
            padding: "10px",
            margin: 0,
            borderRadius: "4px",
            zIndex: 1000,
          }}
        >
          <li
            onClick={() => handleMenuOption("Option 1")}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            Option 1
          </li>
          <li
            onClick={() => handleMenuOption("Option 2")}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            Option 2
          </li>
          <li
            onClick={() => handleMenuOption("Option 3")}
            style={{ padding: "8px 12px", cursor: "pointer" }}
          >
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};

export default CustomContextMenu;
