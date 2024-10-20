import "./mac.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Window from "./Window";
import CustomContextMenu from "./ContextMenu";

export default function Mac({ children, currentBg }) {
  const pathname = useLocation();
  const [menuPosition, setMenuPosition] = useState(null);

  const handleRightClick = (event) => {
    event.preventDefault();
    setMenuPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  const handleClickOutside = () => {
    setMenuPosition(null);
  };
  return (
    <div
      className="mac-container"
      onContextMenu={handleRightClick}
      onClick={handleClickOutside}
    >
      {" "}
      <div className="mac-img">
        <img src={currentBg} alt="mac" />
        <CustomContextMenu
          menuPosition={menuPosition}
          setMenuPosition={setMenuPosition}
        />
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
