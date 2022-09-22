import React, { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import buildIndiaMovement from "../../Assets/Home/Projects/build-india-movement.jpeg";
import { IoLocationSharp } from "react-icons/io5";
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
            <div className={styles.ProjectsItems}>
              <div className={styles.projectsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.ProjectsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className={styles.ProjectsAddressItemContainer}>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddresIcon}>
                      <IoLocationSharp />
                    </div>
                    <div className={styles.ProjectsAddresDesc}>
                      <p>Location</p>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddressItem}>
                      <div className={styles.ProjectsAddresIcon}>
                        <IoLocationSharp />
                      </div>
                      <div className={styles.ProjectsAddresDesc}>
                        <p>Location</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ProjectsItems}>
              <div className={styles.projectsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.ProjectsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className={styles.ProjectsAddressItemContainer}>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddresIcon}>
                      <IoLocationSharp />
                    </div>
                    <div className={styles.ProjectsAddresDesc}>
                      <p>Location</p>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddressItem}>
                      <div className={styles.ProjectsAddresIcon}>
                        <IoLocationSharp />
                      </div>
                      <div className={styles.ProjectsAddresDesc}>
                        <p>Location</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ProjectsItems}>
              <div className={styles.projectsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.ProjectsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className={styles.ProjectsAddressItemContainer}>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddresIcon}>
                      <IoLocationSharp />
                    </div>
                    <div className={styles.ProjectsAddresDesc}>
                      <p>Location</p>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className={styles.ProjectsAddressItem}>
                    <div className={styles.ProjectsAddressItem}>
                      <div className={styles.ProjectsAddresIcon}>
                        <IoLocationSharp />
                      </div>
                      <div className={styles.ProjectsAddresDesc}>
                        <p>Location</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
