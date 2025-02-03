import React from "react";
import HeaderMiddle from "./HeaderMiddle.jsx";
import CategaryNav from "./CategaryNav.jsx";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <marquee>Welcome To K_SHOP...</marquee>
      </div>
      <HeaderMiddle />
      <CategaryNav />
      <hr />
    </header>
  );
};

export default Header;
