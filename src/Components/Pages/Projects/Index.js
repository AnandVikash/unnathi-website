import React from "react";
import styles from "./projects.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import ProjectData from "../../Assets/Data/Projects/projects.json";
import buildIndiaMovement from "../../Assets/Home/Projects/build-india-movement.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Projects"
        titleTag="h1"
        titleColor="#fff"
        localImg="projects.jpg"
        imgColor="696969"
      />
      <div className={styles.projectsMainContainer}>
        <SecTitle
          title="Our Projects"
          titleTag="p"
          titleColor="#808080"
          text="We are always where other people need help"
          textTag="p"
          textColor="#000"
        />

        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectsItemsFlexContainer}>
            {ProjectData.map((item) => {
              return (
                <>
                  <div className={styles.ProjectsItemsContainer}>
                    <div className={styles.ProjectsItems}>
                      <div className={styles.projectsItemImage}>
                        <img src={buildIndiaMovement} />
                      </div>
                      <div className={styles.ProjectsItemContent}>
                        <h3>{item.title}</h3>
                        <p>{item.excerpt.substring(0, 100)}.....</p>
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
