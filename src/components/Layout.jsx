import React from "react";
import MacDoc from "./react/mac/MacDoc";
import StatusBar from "./react/mac/StatusBar";
import Mac from "./react/mac/Mac";
import { useState } from "react";
export default function Layout({ children }) {
  const [currentBg, setCurrentBg] = useState(
    "/wallpaperflare.com_wallpaper (2).jpg"
  );
  const [isSetting, setIsSetting] = useState(false);
  return (
    <div className="main">
      <StatusBar />
      <Mac currentBg={currentBg}>{children}</Mac>
      <MacDoc setIsSetting={setIsSetting} isSetting={isSetting} />

      <BackgroundSelector
        setCurrentBg={setCurrentBg}
        currentBg={currentBg}
        isSetting={isSetting}
      />
      <style jsx>{`
        .main {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </div>
  );
}
function BackgroundSelector({ setCurrentBg, currentBg, isSetting }) {
  const bgImages = [
    "/wallpaperflare.com_wallpaper.jpg",
    "/wallpaperflare.com_wallpaper (1).jpg",
    "/wallpaperflare.com_wallpaper (2).jpg",
    "/wallpaperflare.com_wallpaper (3).jpg",
    "/wallpaperflare.com_wallpaper (4).jpg",
    "/wallpaperflare.com_wallpaper (5).jpg",
    "/wallpaperflare.com_wallpaper (6).jpg",
    "/wallpaperflare.com_wallpaper (7).jpg",
    "/wallpaperflare.com_wallpaper (8).jpg",
    "/wallpaperflare.com_wallpaper (9).jpg",
    "/wallpaperflare.com_wallpaper (10).jpg",
    "/wallpaperflare.com_wallpaper (11).jpg",
    "/wallpaperflare.com_wallpaper (12).jpg",
    "/wallpaperflare.com_wallpaper (13).jpg",
    "/wallpaperflare.com_wallpaper (14).jpg",
    "/wallpaperflare.com_wallpaper (15).jpg",
    "/wallpaperflare.com_wallpaper (16).jpg",
    "/wallpaperflare.com_wallpaper (17).jpg",
    "/wallpaperflare.com_wallpaper (18).jpg",
    "/wallpaperflare.com_wallpaper (19).jpg",
    // Add more wallpaper paths as needed
  ];

  const changeBg = (newBg) => {
    setCurrentBg(newBg);
  };

  return (
    <div className="bg-selector">
      <p style={{ fontSize: "13px", fontWeight: "bold" }}>Select Background</p>
      <div className="bg-selector-container">
        {bgImages.map((bg, index) => (
          <div
            key={index}
            className="bg-selector-item"
            onClick={() => changeBg(bg)}
          >
            <img
              src={bg}
              alt={`Wallpaper ${index + 1}`}
              style={{ width: "100px", height: "60px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .bg-selector {
          position: absolute;
          transform: translateX(${!isSetting ? "110%" : "0"}) translateY(10px);
          top: 5rem;
          right: 10px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 10px;
          backdrop-filter: blur(10px);
          padding: 10px;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .bg-selector-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: 80vh;
          overflow-x: hidden;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
}
