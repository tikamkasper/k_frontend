import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import logo from "../../assets/ks_logo.png";

const HeaderMiddle = () => {
  const [isShowUserDropDown, setIsShowUserDropDown] = useState(false);

  const menuRef = useRef();
  const userIconRef = useRef();

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuRef.current) {
  //     setIsShowUserDropDown(false);
  //   }
  // });

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
            <div className="user" ref={userIconRef}>
              <button
                type="button"
                onClick={() => setIsShowUserDropDown(!isShowUserDropDown)}
              >
                <FaRegUserCircle />
              </button>
              {isShowUserDropDown && (
                <div className="userDropDown" ref={menuRef}>
                  <div className="user-greet">
                    <p>Hello {"User"} !</p>
                    <p>Welcome to {"K_SHOP"} !!</p>
                  </div>
                  <ul>
                    <li>
                      <Link onClick={() => setIsShowUserDropDown(false)}>
                        Login/Signup
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsShowUserDropDown(false)}>
                        {" "}
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsShowUserDropDown(false)}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsShowUserDropDown(false)}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsShowUserDropDown(false)}>
                        {" "}
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
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
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;
