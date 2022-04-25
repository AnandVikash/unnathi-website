import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { FaHeadset } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [scrollClassName, setScrollClassName] = useState(false);
  // const [removeScrollClass, setRemoveScrollClass] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > window.innerHeight) {
      setScrollClassName(true);
      console.log(position);
    }
    if (position < window.innerHeight) {
      setScrollClassName(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavbarScroll = {
    width: "",
    height: "",
    borderRadius: "",
    transition: "",
  };
  const navbarContact = {
    borderRadius: "",
    transition: "",
  };

  if (scrollClassName) {
    handleNavbarScroll.width = "100%";
    handleNavbarScroll.height = "100%";
    handleNavbarScroll.borderRadius = "0px";
    handleNavbarScroll.transition = "2s";
    navbarContact.borderRadius = "0px";
    navbarContact.transition = "2s";
  }
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <>
      <div className={styles.stickyPosition}>
        <div className={styles.navbarMainContainer}>
          <div
            className={styles.navbarContainer}
            // style={{ width: "100%", height: "100%", borderRadius: "0px" }}
            style={{ ...handleNavbarScroll }}
          >
            <div className={styles.navbarImg}>
              <img src="https://digikit.in/assets/img/logo.png" />
            </div>
            <div className={styles.navbarMenu}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blog</NavLink>{" "}
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div
              className={styles.navbarContact}
              // style={{ borderRadius: "0px" }}
              style={{ ...navbarContact }}
            >
              <div className={styles.navbarContactLogo}>
                <FaHeadset />
              </div>
              <div className={styles.navbarContactText}>
                <h5>Free Call</h5>
                <p>1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
