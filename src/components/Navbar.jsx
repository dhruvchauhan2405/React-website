import { Link, NavLink } from "react-router-dom";
import React from "react";
import Logo from "../images/logo.png";
import { links } from "../data";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container nav__container">
          <Link to="/" className="logo">
            <img src={Logo} alt="Nav Logo" />
          </Link>
          <ul className="nav__links">
            {links.map(({ name, path }, index) => {
              return (
                <li>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}
          </ul>
          <button className="nav__toggle-btn">
            <FaBars />
          </button>
        </div>
      </nav>
    </div>
  );
};
