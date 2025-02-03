import React from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiDivingDagger, GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/kasper_logo.png";

const HeaderMiddle = () => {
  return (
    <>
      <div className="header-middle">
        <div className="container ">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" width="150px" />
            </Link>
          </div>
          <div className="search">
            <form>
              <CiSearch />
              <input
                type="text"
                name="q"
                placeholder="Search for products, brands and more
"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="icons">
            <div className="user">
              <button>
                <FaRegUserCircle />
              </button>
            </div>
            <div className="cart">
              <div className="cart-icon">
                <button>
                  <BsCart4 />
                </button>
              </div>
              <div className="cart-count">5</div>
            </div>
          </div>
          {/* <div className="hamburger-menu">
            <button>
              <GiHamburgerMenu />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;
