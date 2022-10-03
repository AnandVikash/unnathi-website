import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import buildIndiaMovement from "../../../Assets/Home/Projects/build-india-movement.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { VscOrganization } from "react-icons/vsc";
import ProjectData from "../../../Assets/Data/Projects/projects.json";

export default function Index() {
  return (
    <>
      <div className={styles.ProjectsAlphaContainer}>
        <div className={styles.ProjectItemsBackground}></div>
        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectHeader}>
            <SecTitle
              title="Projects"
              titleTag="p"
              titleColor="#808080"
              text="We are always where other people need help"
              textTag="p"
              textColor="#000"
            />
          </div>

          <div className={styles.ProjectsItemsFlexContainer}>
            {ProjectData.slice(0, 3).map((item) => {
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
