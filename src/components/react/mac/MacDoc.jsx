import { useState } from "react";
import { useRouteContext } from "../../../contexts/RoutingContext";
const iconList = [
  "/SequoiadockIcons/Finder.png",
  "/SequoiadockIcons/chrome.png",
  "/SequoiadockIcons/Slack.png",
  "/SequoiadockIcons/vscode.png",
  "/SequoiadockIcons/Settings.png",
];
const MacDoc = () => {
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [iconName, setIconName] = useState(iconList[0]);
  const { value, setValue } = useRouteContext();
  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
    const icon = iconList[index]
      .split("/")[2]
      .split(".")[0]
      .toLocaleLowerCase();

    if (icon == "settings") {
      setValue((prev) => ({ ...prev, isSetting: true }));
    } else {
      setValue((prev) => ({ ...prev, isSetting: false }));
    }
  };
  return (
    <div className="floating-app-bar">
      {iconList?.map((_, index) => (
        <button
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          className="icon"
          style={{
            position: "relative",
            transform: `scale(${getScaleFactor(index, hovered)})`,
            transition: "transform .3s ease",
          }}
        >
          <img
            src={`${iconList[index]}`}
            alt=""
            // style={{
            //   transform: `translateY(-${
            //     getScaleFactor(index, hovered) - 1
            //   }rem)`,
            //   transition: "transform .3s ease",
            // }}
          />
          <span className="icon-name">{getIconName(index)}</span>
          <span className={activeIndex === index ? "blink" : ""}></span>
        </button>
      ))}
      {/* <div className="effect">
        {iconList?.map((_, index) => (
          <button key={index} title={`App ${index + 1}`} style={{ scale: 2 }}>
            <img src={`/public/${iconList[index]}`} alt="" />
          </button>
        ))}
      </div> */}
      <style jsx>
        {`
          .blink {
            height: 0.3rem;
            width: 0.3rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            bottom: -0.4rem;
            left: 1.3rem;
            animation: blink 1s infinite;
          }
          .icon-name {
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            font-size: 0.8rem;
            color: white;
            opacity: 0;
            text-transform: uppercase;
            transition: all 0.3s ease;
            font-size: 8px;
            scale: 0;
            transform: translateX(-20%);
            background: var(--bg);
            z-index: -1;
            padding: 0.2rem 0.5rem;
            border-radius: 0.2rem;
          }
          .icon:hover .icon-name {
            scale: 1;
            opacity: 1;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform: translateX(-20%) translateY(-1.8rem);
          }
        `}
      </style>
    </div>
  );
};

// Helper function to calculate the scale factor based on the hovered index
const getScaleFactor = (index, hovered) => {
  if (hovered === null) return 1; // No hover, no scaling
  const distance = Math.abs(index - hovered);

  // Scale up the hovered button and the buttons immediately adjacent to it
  if (distance === 0) return 1.3; // hovered button
  if (distance === 1) return 1.28; // buttons adjacent to hovered button
  if (distance === 2) return 1.2; // buttons further out
  return 1; // other buttons
};
const getIconName = (index) => {
  return iconList[index].split("/")[2].split(".")[0].toLocaleLowerCase();
};
export default MacDoc;
