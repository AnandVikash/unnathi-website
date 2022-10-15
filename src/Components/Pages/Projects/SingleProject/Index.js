import React from "react";
import styles from "./singleProject.module.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Index() {
  return (
    <>
      <div>
        <BannerTitle
          title="Project Title"
          titleTag="h1"
          titleColor="#fff"
          localImg="banner-4.jpg"
          imgColor="696969"
        />
        <div className={styles.SingleProjectContainer}>
          <div className={styles.SingleProjectContent}>
            <div className={styles.SingleProjectContentImg}>
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/causes/details-big.png" />
            </div>
            <div className={styles.SingleProjectContentDesc}>
              <h3>Give children a good education and a better life</h3>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available but the majority.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrang hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true.
              </p>
              <p className={styles.SingleProjectTitle}>
                We want to ensure the education for the kids.
              </p>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable.
              </p>
              <p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                    phaedrum.
                  </li>
                  <li>There are many variations of passages of Lorem Ipsum.</li>
                  <li>
                    Available but the majority have alteration in some injected
                    or words.
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum which
                    don't look even slightly believable.
                  </li>
                </ul>
              </p>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable.
              </p>
            </div>
          </div>
          <div className={styles.SingleProjectDetails}>
            <div className={styles.SingleProjectDetailsOrganizer}>
              <div className={styles.SingleProjectOrganizerImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/project_organizer.png" />
              </div>
              <div className={styles.SingleProjectOrganizerImgContent}>
                <p className={styles.SingleProjectOrganizerHeading}>
                  Project organizer:
                </p>
                <p className={styles.SingleProjectOrganizerName}>
                  Polin sarika
                </p>
                <p className={styles.SingleProjectOrganizerCompany}>
                  Manager at ABC company
                </p>
                <div className={styles.SingleProjectOrganizerContact}>
                  <div className={styles.SingleProjectContactItem}>
                    <div className={styles.SingleProjectContactItemIcon}>
                      <BsTelephone />
                    </div>
                    <div className={styles.SingleProjectContactItemDetails}>
                      1234567890
                    </div>
                  </div>
                  <div className={styles.SingleProjectContactItem}>
                    <div className={styles.SingleProjectContactItemIcon}>
                      <BsEnvelope />
                    </div>
                    <div className={styles.SingleProjectContactItemDetails}>
                      1234567890
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.SingleRecentContainer}>
              <h3>Recent causes</h3>
              <div className={styles.SingleRecentProjectsItem}>
                <div className={styles.SingleRecentProjectsItemImg}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.SingleRecentProjectsItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
              <div className={styles.SingleRecentProjectsItem}>
                <div className={styles.SingleRecentProjectsItemImg}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.SingleRecentProjectsItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
              <div className={styles.SingleRecentProjectsItem}>
                <div className={styles.SingleRecentProjectsItemImg}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.SingleRecentProjectsItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.SingeMapContainer}>
              <h3>Location</h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0487342224183!2d77.57447261482264!3d13.032568590815954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e8059c75e1%3A0x20518939a8fddd6d!2sUnnathi%20Healing%20Foundation!5e0!3m2!1sen!2sin!4v1664782765574!5m2!1sen!2sin"
                height="250"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <div className={styles.SingleShareCoursesContainer}>
              <h3>Share causes</h3>
              <div className={styles.SingleShareCoursesSocial}>
                <div>
                  <AiFillFacebook />
                </div>
                <div>
                  <AiFillInstagram />
                </div>
                <div>
                  <AiFillTwitterCircle />
                </div>
                <div>
                  <AiFillLinkedin />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
