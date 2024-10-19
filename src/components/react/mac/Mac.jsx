import "./mac.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Window from "./Window";

export default function Mac({ children, currentBg }) {
  const pathname = useLocation();
  return (
    <div className="mac-container">
      <div className="mac-img">
        <img src={currentBg} alt="mac" />
      </div>
      {pathname.pathname.includes("/mac/projects/") ||
      pathname.pathname === "/" ? (
        <div className="mac-content">{children}</div>
      ) : (
        <Window title={pathname.pathname}>
          <div className="mac-content">{children}</div>
        </Window>
      )}
      <style jsx>
        {`
          .mac-container {
            width: 100%;
            height: 100vh;
            position: relative;
            overflow: hidden;
          }
          .mac-content {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          /* width */
          ::-webkit-scrollbar {
            width: 3px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: white;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}
