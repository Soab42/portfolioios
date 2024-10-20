import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

// Create the context
export const RoutingContext = createContext();
export const useRouteContext = () => useContext(RoutingContext);
// Create the ContextProvider component
export const RoutingContextProvider = ({ children }) => {
  // Define state or other values that you want to share
  const [value, setValue] = useState({
    mood: "on",
    currentPath: "/",
    prevPath: "/",
    isSetting: false,
    currentBG: "/wallpaperflare.com_wallpaper (14).jpg",
  });

  return (
    // Provide the context to child components
    <RoutingContext.Provider value={{ value, setValue }}>
      {children}
    </RoutingContext.Provider>
  );
};
