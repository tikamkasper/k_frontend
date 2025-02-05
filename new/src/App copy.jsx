import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">K-Shop</div>
      <input type="text" className="search-bar" placeholder="Search Products & Brands" />
      <div className="icons">
        <div 
          className="user-icon" 
          onMouseEnter={() => setShowDropdown(true)} 
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span className="icon">👤</span>
          {showDropdown && (
            <div className="dropdown">
              <p>Hello User</p>
              <button>Sign Up</button>
            </div>
          )}
        </div>
        <div className="cart-icon">🛒</div>
      </div>
    </nav>
  );
};

export default Navbar;
