import React from "react";
import styles from "./singleProject.module.css";
// import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import projectsJson from "../../../Assets/Data/Projects/projects.json";
export default function Index() {
  const { projectid } = useParams();
  const filteredProject = projectsJson.filter(
    (item) => item.id === Number(projectid)
  );
  const { id, title, desc, organiser, location, image } = filteredProject[0];
  return (
    <>
      <div>
        {/* <BannerTitle
          title={`${title}`}
          titleTag="h1"
          titleColor="#fff"
          // localImg={`projectsBanners/${image}`}
          linearGradient="linear-gradient(to left bottom, #29af8a, #43be9a, #59cdab, #6edcbc, #82ebcd, #8aefd2, #91f2d8, #99f6dd, #97f0d8, #95e9d2, #92e3cd, #90ddc8);"
          imgColor="696969"
        /> */}
        <div className={styles.SingleProjectContainer}>
          <div className={styles.SingleProjectContent}>
            <div className={styles.SingleProjectContentImg}>
              <img
                src={require(`../../../Assets/Projects/new-projects/${image}`)}
              />
            </div>
            <div className={styles.SingleProjectContentDesc}>
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: desc }}></div>
            </div>
          </div>
          <div className={styles.SingleProjectDetails}>
            <div className={styles.SingleProjectDetailsOrganizer}>
              <div className={styles.SingleProjectOrganizerImg}>
                <img src="https://unnathi.org/images/logonew.jpg" />
              </div>
              <div className={styles.SingleProjectOrganizerImgContent}>
                <p className={styles.SingleProjectOrganizerHeading}>
                  Project organizer:
                </p>
                <p className={styles.SingleProjectOrganizerName}>Unnathi</p>
                <p className={styles.SingleProjectOrganizerCompany}>
                  Unnathi Healing Foundation
                </p>
                <div className={styles.SingleProjectOrganizerContact}>
                  <div className={styles.SingleProjectContactItem}>
                    <div className={styles.SingleProjectContactItemIcon}>
                      <BsTelephone />
                    </div>
                    <div className={styles.SingleProjectContactItemDetails}>
                      +91 9845426049
                    </div>
                  </div>
                  <div className={styles.SingleProjectContactItem}>
                    <div className={styles.SingleProjectContactItemIcon}>
                      <BsEnvelope />
                    </div>
                    <div className={styles.SingleProjectContactItemDetails}>
                      unnathi.org@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={styles.SingleRecentContainer}>
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
            </div> */}
            {/* 
            <div className={styles.SingeMapContainer}>
              <h3>Location</h3>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0487342224183!2d77.57447261482264!3d13.032568590815954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e8059c75e1%3A0x20518939a8fddd6d!2sUnnathi%20Healing%20Foundation!5e0!3m2!1sen!2sin!4v1664782765574!5m2!1sen!2sin"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
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
