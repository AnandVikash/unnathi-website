import React from "react";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
// import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import styles from "./contact.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function Index() {
  const [searchParams] = useSearchParams();
  let successparas = searchParams.get("message");
  console.log(successparas == null);
  return (
    <>
      {/* <BannerTitle
        title="Contact"
        titleTag="h1"
        titleColor="rgb(9, 50, 76)"
        localImg="contacts.jpg"
        imgColor="696969"
      /> */}
      <SecTitle
        title="Contact With Us"
        titleTag="p"
        titleColor="#808080"
        text="Get in touch with us & stay updates"
        textTag="p"
        textColor="#000"
      />
      <div className={styles.ContactMainContainer}>
        <div className={styles.ContactContainer}>
          <div className={styles.AddressContainer}>
            <div
              className={styles.AddressItemsContainers}
              data-aos="fade-up-right"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <IoLocationSharp />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Address</h3>
                  <p>
                    150, 2nd Floor, Above Vishwas Jewellers, Sanjay Nagar Main
                    Rd, AECS Layout, Bengaluru, Karnataka 560094
                  </p>
                </div>
              </div>
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <FaEnvelope />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Email</h3>
                  <p>unnathi.org@gmail.com </p>
                </div>
              </div>
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <BsTelephoneFill />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Phone</h3>
                  <p>+91 9845426049</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormsMainContainer}>
            <div
              className={styles.FormsContainer}
              data-aos="fade-up-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <h3>Leave us a message</h3>
              <form
                method="POST"
                action="https://digikit.in/forms/unnathi-healing-foundation/contact.php"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Your Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <select name="franchise" id="franchise" required>
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
        </div>
      </div>
      <div
        className={styles.contactMap}
        data-aos="fade-up-left"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0487342224183!2d77.57447261482264!3d13.032568590815954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e8059c75e1%3A0x20518939a8fddd6d!2sUnnathi%20Healing%20Foundation!5e0!3m2!1sen!2sin!4v1664782765574!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

{
  /* <div className={styles.AddressItems}>
<div className={styles.AddressItemIcon}>
  <div className={styles.AddressIcon}>
    <IoLocationSharp />
  </div>
</div>
<div className={styles.AddressItemContent}>
  <h3>Address</h3>
  <p>
    150, 2nd Floor, Above Vishwas Jewellers, Sanjay Nagar Main
    Rd, AECS Layout, Bengaluru, Karnataka 560094
  </p>
</div>
</div> */
}
