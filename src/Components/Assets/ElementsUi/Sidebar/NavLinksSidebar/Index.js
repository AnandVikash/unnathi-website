import React from "react";
import { Link } from "react-router-dom";
import styles from "./navLinksSidebar.module.css";
export default function Index() {
  return (
    <>
      <div className={styles.MainLinksSideBarContainer}>
        <div className={styles.MainLinksSideBarLinks}>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/traning">Traning</Link>
            </li>
            <li>
              <Link to="/healing">Healing</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.MainLinksSideBarAddress}>
          <p>
            <strong>Address:</strong> 150, 2nd Floor, Above Vishwas Jewellers,
            Sanjay Nagar Main Rd, AECS Layout, Bengaluru, Karnataka 560094
          </p>
          <p>
            <strong>Phone:</strong> +91 9845426049
          </p>
          <p>
            <strong>Email:</strong> unnathi.org@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
