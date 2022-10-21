import React from "react";
import styles from "./donate.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { Link } from "react-router-dom";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Donate Us"
        titleTag="h1"
        titleColor="#fff"
        localImg="banner-5.jpg"
        imgColor="696969"
      />
      <div className={styles.HealingMainContainer}>
        <div className={styles.HealingContainer}>
          <div
            className={styles.HealingText}
            data-aos="fade-up-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <div className={styles.FormsContainer}>
              <h3>Leave us a message</h3>
              <form>
                <div>
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div>
                  <input type="email" placeholder="Your Your Email" />
                </div>
                <div>
                  <input type="text" placeholder="Subject" />
                </div>

                <div>
                  <select name="franchise" id="franchise">
                    <option value="" disabled selected hidden>
                      Select your Franchise
                    </option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                  </select>
                </div>

                <div>
                  <textarea rows="10" placeholder="Message" />
                </div>

                <div className={styles.FormSubmit}>
                  <input type="submit" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
          <div
            className={styles.HealingSidebar}
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <MainLinksSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
