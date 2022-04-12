import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Digikit</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>Services</li>
            <li>Blog</li>
            <li>About</li>
            <li>Testimon</li>
          </ul>
        </div>
        <button className="button">contact us</button>
      </div>
    </div>
  );
}

export default Navbar;
