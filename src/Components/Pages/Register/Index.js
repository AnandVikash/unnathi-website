import React from "react";
import styles from "./register.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { Link } from "react-router-dom";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Register With Us"
        titleTag="h1"
        titleColor="#fff"
        localImg="banner-5.jpg"
        imgColor="696969"
      />
      <div className={styles.RegisterMainContainer}>
        <div className={styles.RegisterContainer}>
          <div
            className={styles.RegisterText}
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
                      Select Registration Type
                    </option>
                    <option value="donor">Donor</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="event">Event</option>
                    <option value="training">Training </option>
                    <option value="healing ">Healing </option>
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
            className={styles.RegisterSidebar}
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
