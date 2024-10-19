import { useState } from "react";
import ImageSlider from "../ImageSlider";
const iconList = [
  "Sequoia dock Icons/Finder.png",
  "Sequoia dock Icons/Chrome.png",
  "Sequoia dock Icons/Slack.png",
  "Sequoia dock Icons/VSCode.png",
  "Sequoia dock Icons/Settings.png",
];
const MacDoc = ({ setIsSetting, isSetting }) => {
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [iconName, setIconName] = useState(iconList[0]);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
    const icon = iconList[index]
      .split("/")[1]
      .split(".")[0]
      .toLocaleLowerCase();
    if (icon === "settings") {
      setIsSetting(true);
    } else {
      setIsSetting(false);
    }
    console.log(icon);
  };
  return (
    <div className="floating-app-bar">
      {iconList?.map((_, index) => (
        <button
          key={index}
          title={`${getIconName(index)}`}
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
            src={`/public/${iconList[index]}`}
            alt=""
            // style={{
            //   transform: `translateY(-${
            //     getScaleFactor(index, hovered) - 1
            //   }rem)`,
            //   transition: "transform .3s ease",
            // }}
          />
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
            height: 0.5rem;
            width: 0.5rem;
            border-radius: 50%;
            background-color: white;
            position: absolute;
            bottom: -0.4rem;
            left: 1.3rem;
            animation: blink 1s infinite;
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
  return iconList[index].split("/")[1].split(".")[0].toLocaleLowerCase();
};
export default MacDoc;
