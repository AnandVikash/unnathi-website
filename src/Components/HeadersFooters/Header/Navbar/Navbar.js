import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
  FaSearch,
  FaQuora,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { menuItems } from "../Navbar";
import MobileMenu from "../MobileHeader/Index";
import Logo from "../../../Assets/logonew.jpg";
function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  const [resizePosition, setResizePosition] = useState(window.innerWidth);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleResize = () => {
    const position = window.innerWidth;
    setResizePosition(position);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let stickyClasses = "";
  if (scrollPosition > window.innerHeight - 150) {
    stickyClasses = styles.navbarMenuSticky;
  }

  return (
    <>
      <div className={styles.navbarAlphaContainer}>
    
        <div className={`${styles.navbarMenuAlphaContainer} ${stickyClasses}`}>
          <div className={styles.navbarMenuMainContainer}>
            <div className={styles.navbarlogoContainer}>
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
            <div className={styles.navbarMenuContainer}>
              <div className={styles.navbarMenuBackgroundContainer}>
                {resizePosition > 1200 && (
                  <>
                    <div className={styles.navbarMenuItems}>
                      <ul>
                        {menuItems.map((item) => {
                          return (
                            <>
                              <li
                                key={item.id}
                                className={styles.navbarMenuItem}
                              >
                                <NavLink
                                  to={item.url}
                                  className={styles.navbarMenuItemIcon}
                                >
                                  {item.title}
                                  {item.hasOwnProperty("submenu") && (
                                    <IoMdArrowDropdown />
                                  )}
                                </NavLink>

                                {item.hasOwnProperty("submenu") && (
                                  <ul className={styles.submenulist}>
                                    {item.submenu.map((item) => {
                                      return (
                                        <>
                                          <li key={item.id}>
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
                  </>
                )}
                {resizePosition < 1200 && (
                  <div className={styles.navbarMenuItems}>
                    <MobileMenu />
                  </div>
                )}
                    <div className={styles.navbarTopSocialAccounts}>
            <ul className={styles.navbarTopSocialMedia}>
              <li>
                <a
                  href="https://www.facebook.com/unnathi.healing.5"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/UnnathiF/with_replies"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/unnathihealing_foundation?igshid=eauotystejn9"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.quora.com/q/ugxhmonbnylydfda?invite_code=uc0zNnmcMc3SrFp5yi6H"
                  target="_blank"
                >
                  <FaQuora />
                </a>
              </li>
            </ul>
          </div>
              </div>
            </div>
          </div>
        </div>
          <div className={styles.navbarTopContainer}>
          <div className={styles.navbarTopAccounts}>
            <div className={styles.navbarTopEmail}>
              <div>
                <AiOutlineMail />
              </div>
              <div>unnathi.org@gmail.com </div>
            </div>
            <div className={styles.navbarTopPhone}>
              <div>
                <BsFillTelephoneFill />
              </div>
              <div>+91 9845426049</div>
            </div>
            <div className={styles.navbarTopNumber}> 
              <p> (MONDAY TO SATURDAY
9:30 AM TO 6:30 P.M.)</p>
            </div>
            {/* <div className={styles.navbarTopFaq}></div> */}
          </div>
          <div className={styles.navbarMenuButton}>
                  <Link to="/donate-us">Donate Now</Link>
                </div>
          {/* <div className={styles.navbarTopSocialAccounts}>
            <ul className={styles.navbarTopSocialMedia}>
              <li>
                <a
                  href="https://www.facebook.com/unnathi.healing.5"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/UnnathiF/with_replies"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/unnathihealing_foundation?igshid=eauotystejn9"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.quora.com/q/ugxhmonbnylydfda?invite_code=uc0zNnmcMc3SrFp5yi6H"
                  target="_blank"
                >
                  <FaQuora />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
