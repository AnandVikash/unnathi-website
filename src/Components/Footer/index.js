import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
export default function index() {
  return (
    <>
      <div className={styles.footerMainContainer}>
        <div className={styles.footerContainer}>
          <div className={styles.footer}>
            <div className={styles.footerCol1}>
              <img src="https://digikit.in/assets/img/logo.png" />
              <p className={styles.footerCol1Text}>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure pain was born and I will give you a
                complete.
              </p>
              <p>
                <ul className={styles.footerCol1Social}>
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
                    <FaPinterest />{" "}
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles.footerCol2}>
              <h4>Quick Links</h4>
              <ul>
                <li>Home </li>
                <li> Services </li>
                <li> About </li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.footerCol3}>
              <h4>Let's Talk</h4>
              <ul>
                <li>Phone: +91 9513474123 </li>
                <li>Email: hello@digikit.in</li>
              </ul>
            </div>
            <div className={styles.footerCol4}>
              <h4>CONTACT</h4>
              <p>
                No. 36/11, Second Floor, 2nd Cross, *G" Block, Sahakara Nagar (
                behind Motherhood Hospital ) Bengaluru - 560 092
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
