import React from "react";
import styles from "./projects.module.css";
// import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import ProjectData from "../../Assets/Data/Projects/projects.json";
import buildIndiaMovement1 from "../../Assets/Home/Projects/build-india-movement.jpeg";
import buildIndiaMovement from "../../Assets/Projects/adoloscent-children-2.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
import { Link } from "react-router-dom";
export default function Index() {
  let filteredProject = ProjectData.filter((item) => item.homeId == 1);

  return (
    <>
      {/* <BannerTitle
        title="Projects"
        titleTag="h1"
        titleColor="rgb(9, 50, 76)"
        localImg="projects.jpg"
        imgColor="696969"
      /> */}
      <div className={styles.projectsMainContainer}>
        <SecTitle
          title="Active Projects"
          titleTag="p"
          titleColor="#808080"
          text="We are always where other people need help"
          textTag="p"
          textColor="#000"
        />
        <div className={styles.projectAboutUs}>
          <p>
            India is a country with the greatest number of people under the age
            of 18 years in the world. And it is a goldmine of human resource for
            the future. But the goldmine is becoming more and more difficult to
            reach due to many problems plaguing the youth of the country.
            Problems like suicidal tendencies, depression, drug addiction,
            relationship issues are unfortunately on the rise. The best way we
            can stop this epidemic is to reach out to youngsters on a more
            personal level and to guide them the right way. Unnathi has projects
            to address these challenges through Build India Movement, Faculty
            development programme, Skill Development programme.
          </p>
        </div>
        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectsItemsFlexContainer}>
            {ProjectData.map((item) => {
              return (
                <>
                  <div className={styles.ProjectsItemsContainer}>
                    <div className={styles.ProjectsItems}>
                      <div className={styles.projectsItemImage}>
                        {/* <img src={buildIndiaMovement} /> */}
                        <img
                          src={require(`../../Assets/Projects/new-projects/${item.image}`)}
                        />
                      </div>
                      <div className={styles.ProjectsItemContent}>
                        <Link to={`/projects/${item.link}/${item.id}`}>
                          <h3>{item.title.substring(0, 38)} ......</h3>
                        </Link>
                        <p>{item.excerpt.substring(0, 90)} .....</p>
                        <div className={styles.ProjectsAddressItemContainer}>
                          <div className={styles.ProjectsAddressItem}>
                            <div className={styles.ProjectsAddresIcon}>
                              <IoLocationSharp />
                            </div>
                            <div className={styles.ProjectsAddresDesc}>
                              <p>Location</p>
                              <p>{item.location}</p>
                            </div>
                          </div>
                          <div className={styles.ProjectsAddressItem}>
                            <div className={styles.ProjectsAddressItem}>
                              <div className={styles.ProjectsAddresIcon}>
                                <VscOrganization />
                              </div>
                              <div className={styles.ProjectsAddresDesc}>
                                <p>Organiser</p>
                                <p>{item.organiser}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
