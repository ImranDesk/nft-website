import React from "react";
import logo from "../assets/header/logo.png";
import searchIcon from "../assets/header/search.png";

import switchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="search">
        <div className="search-logo">
          <img src={searchIcon} alt="" />
        </div>
        <input type="text" placeholder="search items" />
      </div>

      <div className="menu">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header-actions">
        <div className="switch">
          <img src={switchIcon} alt="" />
        </div>
      </div>

      <div className="login">
        GET IN
      </div>
    </div>
  );
};

export default Header;
