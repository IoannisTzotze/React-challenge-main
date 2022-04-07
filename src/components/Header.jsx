import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fxdigitallogo.png";
import Search from "./Search";

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <Link to="/">Movies</Link>
        <Link to="/page1">TV Series</Link>
        <Link to="/page2">Popular</Link>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
