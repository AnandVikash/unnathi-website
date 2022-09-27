import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { menuItems } from "../Navbar";
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
                    {menuItems.map((item) => {
                      return (
                        <>
                          <li key={item.id} className={styles.navbarMenuItem}>
                            <NavLink to={item.url}>{item.title}</NavLink>

                            {item.hasOwnProperty("submenu") && (
                              <ul className={styles.submenulist}>
                                {item.submenu.map((item) => {
                                  console.log(item);
                                  return (
                                    <>
                                      <li>
                                        <NavLink to={item.url}>
                                          {item.title}
                                        </NavLink>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        </>
                      );
                    })}
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
