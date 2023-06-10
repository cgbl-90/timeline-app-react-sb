import React from "react";
import photo from "./Avatar.png";
import "./Header.css";

const Header = ({ fullName, role, socialLinks }) => {
  return (
    <header>
      <img src={photo} alt="Avatar" className="avatar" />
      <div>
        <h1 className="title">{fullName}</h1>
        <h3 className="subtitle">{role}</h3>
        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
