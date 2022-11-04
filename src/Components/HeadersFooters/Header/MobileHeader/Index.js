import React, { useState, useEffect } from "react";
import styles from "./mobileHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdCloseCircle } from "react-icons/io";
import { menuItems } from "../Navbar";
import { NavLink, Link } from "react-router-dom";
import LogoImg from "../../../Assets/unnathi-png-logo.png";
import { useLocation } from "react-router-dom";
export default function Index() {
  const [menuShow, setMenuShow] = useState(false);

  const location = useLocation();
  const key = useLocation();

  useEffect(() => {
    if (!(location.key == "default")) {
      setMenuShow(!menuShow);
    }
  }, [location]);

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  let menuWidth = menuShow ? "-55%" : "0";
  let SidebarWidth = menuShow ? "0" : "55%";
  return (
    <>
      {!menuShow && (
        <>
          <div className={styles.sidebarBackground}></div>
        </>
      )}
      <div className={styles.hamburgerMenuContainer}>
        <GiHamburgerMenu onClick={handleMenu} />
        <div
          className={styles.sidebarContainer}
          style={{ right: menuWidth, width: SidebarWidth }}
        >
          {/* {!menuShow && <img src={LogoImg} />} */}
          {/* <div className={styles.sidebarContainer} style={{ right: menuWidth }}></div> */}
          <div>
            <ul>
              {menuItems.map((item, index) => {
                return (
                  <>
                    {index == 0 && (
                      <img
                        style={{ backgroundColor: "#fff", padding: "10px" }}
                        src={LogoImg}
                      />
                    )}
                    <li key={item.id} className={styles.sidebarNavLinks}>
                      <NavLink to={item.url}>{item.title}</NavLink>
                      {item.hasOwnProperty("submenu") && (
                        <ul className={styles.sidebarNavSubLinks}>
                          {item.submenu.map((item) => {
                            return (
                              <>
                                <li key={item.id}>
                                  <NavLink to={item.url}>{item.title}</NavLink>
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
          <div className={styles.sidebarClose}>
            {/* <div className={styles.sidebarBackground}> </div> */}
            <IoMdCloseCircle onClick={handleMenu} />
          </div>
        </div>
      </div>
    </>
  );
}

// {menuItems.map((item) => {
//   return (
//     <>
//       <li key={item.id}>
//         <NavLink to={item.url}>{item.title}</NavLink>
//         {item.hasOwnProperty("submenu") && (
//           <ul style={{ marginLeft: "20px" }}>
//             {item.submenu.map((item) => {
//               return (
//                 <>
//                   <li key={item.id}>
//                     <NavLink to={item.url}>{item.title}</NavLink>
//                   </li>
//                 </>
//               );
//             })}
//           </ul>
//         )}
//       </li>
//     </>
//   );
// })}
