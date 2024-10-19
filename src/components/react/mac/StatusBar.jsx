import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LinkList from "./LinkList";
const StatusBar = () => {
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [isCharging, setIsCharging] = useState(false);
  const [wifiStatus, setWifiStatus] = useState("Connected");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timerId = setInterval(() => setTime(new Date()), 1000);
    console.log(navigator);
    // Get battery status
    if (navigator.getBattery) {
      navigator.getBattery().then((battery) => {
        const updateBatteryInfo = () => {
          setBatteryLevel(
            battery.level === null ? 0 : Math.round(battery.level * 100)
          );
          setIsCharging(battery.charging);
        };

        updateBatteryInfo();

        battery.addEventListener("levelchange", updateBatteryInfo);
        battery.addEventListener("chargingchange", updateBatteryInfo);
      });
    } else {
      console.log("Battery API not supported");
    }

    // Example Wi-Fi status check (can be replaced with real status)
    setWifiStatus(navigator.onLine ? "Connected" : "Disconnected");

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    // add am pm
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${amPm}`;
  };

  const formatDate = (date) => {
    // like Mon oct 11
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    return `${weekday} ${month} ${day}`;
  };

  return (
    <div className="status-bar">
      <div>
        <LinkList />
        <div className="mactools"></div>
      </div>
      <div className="status">
        <div className="wifi">
          <span role="img" aria-label="wifi">
            {wifiStatus === "Connected" ? (
              <img src="/public/wifi-logo-svgrepo-com.svg" alt="wifi" />
            ) : (
              <img src="/public/wifi-svgrepo-com.svg" alt="wifi" />
            )}
            {wifiStatus}
          </span>
        </div>
        <div className="battery">
          <span role="img" aria-label="battery">
            {isCharging ? (
              <img src="/public/charging-battery-svgrepo-com.svg" alt="wifi" />
            ) : (
              <img src="/public/battery-full-svgrepo-com (1).svg" alt="wifi" />
            )}
          </span>{" "}
          {batteryLevel}%
        </div>
        <div className="date">{formatDate(time)}</div>
        <div className="time">{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default StatusBar;
