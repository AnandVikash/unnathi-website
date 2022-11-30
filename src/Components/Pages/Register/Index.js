import React from "react";
import styles from "./register.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { Link } from "react-router-dom";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import { useSearchParams } from "react-router-dom";

export default function Index() {
  const [searchParams] = useSearchParams();

  let successparas = searchParams.get("message");
  console.log(successparas == null);

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
              <form
                method="POST"
                action="https://digikit.in/forms/unnathi-healing-foundation/register.php"
              >
                <div>
                  <input type="text" name="name" placeholder="Your Full Name" />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Your Email"
                  />
                </div>
                <div>
                  <input type="text" name="subject" placeholder="Subject" />
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
                  <textarea rows="10" name="message" placeholder="Message" />
                </div>

                <div className={styles.FormSubmit}>
                  <input type="submit" value="Send Message" />
                </div>
                {!(successparas == null) && (
                  <>
                    <p className={styles.successMessage}>
                      Thank You For Contacting, Will get in Touch with u shortly
                    </p>
                  </>
                )}
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
