import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LinkList() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

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
  return (
    <div className="macbar">
      <Link to="">
        <img src="/apple.svg" alt="icon" />
      </Link>
      {sortedLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          style={{
            fontWeight: link.to.includes(activeLink) ? "bold" : "normal",
            color: link.to.includes(activeLink) ? "white" : "#d4d4d4",
            fontSize: ".9rem",
          }}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
