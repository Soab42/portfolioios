import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";
import { useRouteContext } from "../../../contexts/RoutingContext";

export default function LinkList() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const router = useNavigate();
  const { value, setValue } = useRouteContext();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveLink(path);
  }, [location]);

  const links = [
    { to: "/mac/blogs", text: "Blogs" },
    { to: "/mac/contact", text: "Contact" },
    { to: "/mac/education", text: "Education" },
    { to: "/mac/projects", text: "Projects" },
    { to: "/mac/skills", text: "Skills" },
    { to: "/mac/about", text: "About" },
  ];
  const sortedLinks = [...links].sort((a, b) => {
    if (a.to.includes(activeLink)) return -1;
    if (b.to.includes(activeLink)) return 1;
    return 0;
  });

  const handleShow = (e) => {
    if (e.target.role === "desktop") {
      router("");
      setShowMenu(false);
    } else if (e.target.role === "settings") {
      setValue((prev) => ({ ...prev, isSetting: true }));
      setShowMenu(false);
    }
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // get click event for outside click
    const handleClickOutside = (event) => {
      if (!event.target.closest(".macbar-item")) setShowMenu(false);
    };
    // add event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // remove event listener
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);
  useEffect(() => {
    gsap.fromTo(
      ".macbar-list li",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }
    );
  }, [showMenu]);
  return (
    <div className="macbar">
      <div className="macbar-item" onClick={handleShow}>
        <img
          src="/apple.svg"
          alt="icon"
          style={{ color: "black" }}
          className="clickable"
        />

        {showMenu && (
          <div className="macbar-list">
            <ul>
              <li>About This Mac</li>
              <li role="desktop">Go To Desktop</li>
              <li role="settings">System Settings...</li>
              <li>App Store</li>
              <li>Recent Items</li>
              <li>Force Quit</li>
              <li role="sleep">Sleep</li>
              <li role="restart">Restart...</li>
              <li role="shutdown">Shut Down...</li>
            </ul>
          </div>
        )}
      </div>
      {sortedLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          style={{
            fontWeight: link.to.includes(activeLink) ? "bold" : "normal",
            color: link.to.includes(activeLink) ? "white" : "#d4d4d4",
            fontSize: ".9rem",
            textTransform: "capitalize",
          }}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
