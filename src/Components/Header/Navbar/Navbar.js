import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);
  // let stickyClasses = styles.navbarMenuSticky;

  let stickyClasses = "";
  if (scrollPosition > window.innerHeight) {
    stickyClasses = styles.navbarMenuSticky;
  }
  return (
    <>
      <div className={styles.navbarAlphaContainer}>
        <div className={styles.navbarTopContainer}>
          <div className={styles.navbarTopAccounts}>
            <div className={styles.navbarTopEmail}>
              <div>
                <AiOutlineMail />
              </div>
              <div>healing.unnathi@gmail.com</div>
            </div>
            <div className={styles.navbarTopPhone}>
              <div>
                <AiFillPhone />
              </div>
              <div>+91 9845426049</div>
            </div>
            <div className={styles.navbarTopFaq}></div>
          </div>
          <div className={styles.navbarTopSocialAccounts}>
            <ul className={styles.navbarTopSocialMedia}>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.navbarMenuAlphaContainer} ${stickyClasses}`}>
          <div className={styles.navbarMenuMainContainer}>
            <div className={styles.navbarlogoContainer}>
              <img src="https://unnathi.org/images/logonew.jpg" />
            </div>
            <div className={styles.navbarMenuContainer}>
              <div className={styles.navbarMenuBackgroundContainer}>
                <div className={styles.navbarMenuItems}>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Training</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Healing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Media</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Research</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className={styles.navbarMenuSearch}>
                  <FaSearch />
                </div>
                <div className={styles.navbarMenuButton}>
                  <a>Donate Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
