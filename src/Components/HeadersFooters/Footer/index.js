import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import { TwitterTimelineEmbed } from "react-twitter-embed";
import Logo from "../../Assets/logonew.jpg";
export default function index() {
  const data = `<a class="twitter-timeline" href="https://twitter.com/UnnathiF?ref_src=twsrc%5Etfw">Tweets by UnnathiF</a>`;

  return (
    <>
      <div className={styles.footerMainContainer}>
        <div className={styles.footerContainer}>
          {/* <div className={styles.footerFormContentContainer}>
            <div className={styles.footerFormContent}>
              <p className={styles.footerFormTitle}>Newsletter</p>
              <p className={styles.footerFormDesc}>
                To get weekly & monthly news, Your email address &nbsp;
                <span>Subscribe</span> to our newsletter.
              </p>
            </div>
            <div className={styles.footerForm}>
              <form>
                <div>
                  <input type="email" placeholder="Enter Your Email Address" />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>
          </div> */}
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContentItem}>
              <img src={Logo} alt="" />
              <p>
                Welcome to Unnathi Healing Foundation. Everyone wants to give to
                society, and Unnathi provides platform to serve and be served.
                The approach is to give help to get help. The world is ours and
                we all have to transcend the horizons of individual identity to
                build the collective soul.
              </p>
              <p>
                <span> Address:</span> 150, 2nd Floor, Above Vishwas Jewellers,
                Sanjay Nagar Main Rd, AECS Layout, Bengaluru, Karnataka 560094
              </p>
              <p>
                <span>Phone:</span>+91 9845426049
              </p>
              <p>
                <span>Email:</span>unnathi.org@gmail.com
              </p>
            </div>
            <div className={styles.footerContentItem}>
              <div className={styles.footerContentLinks}>
                <p className={styles.footerContentLinksTitle}>Quick Likes</p>
                <ul>
                  <li>About us</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <li>News</li>
                  <li>Career</li>
                </ul>
              </div>
            </div>
            <div className={styles.footerContentItem}>
              <div className={styles.footerContentLinks}>
                <p className={styles.footerContentLinksTitle}>Support</p>
                <ul>
                  <li>Help & FAQ</li>
                  <li>Causes</li>
                  <li>Events</li>
                  <li>Contact us</li>
                  <li>Terms of services</li>
                </ul>
              </div>
            </div>

            <div
              className={`${styles.footerContentItem}${styles.footerContainerTwiteer}`}
            >
              <div className={styles.footerContentLinks}>
                <p className={styles.footerContentLinksTitle}>Latest tweets</p>
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="UnnathiF"
                    options={{ height: 350 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
