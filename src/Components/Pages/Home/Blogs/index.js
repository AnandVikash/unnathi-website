import React, { useState, useEffect, useRef } from "react";
import styles from "./Blogs.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import buildIndiaMovement from "../../../Assets/Home/Blogs/blogs.jpeg";
import { IoLocationSharp } from "react-icons/io5";
export default function Index() {
  return (
    <>
      <div className={styles.BlogsAlphaContainer}>
        <div className={styles.BlogItemsBackground}></div>
        <div className={styles.BlogsContainer}>
          <div className={styles.BlogHeader}>
            <SecTitle
              title="Blogs"
              titleTag="p"
              titleColor="#808080"
              text="Check Our Latest Blogs"
              textTag="p"
              textColor="#000"
            />
          </div>

          <div className={styles.BlogsItemsFlexContainer}>
            <div className={styles.BlogsItems}>
              <div className={styles.BlogsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.BlogsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <p className={styles.BlogItemDate}>August 19 2022</p>
                <hr />
                <p className={styles.BlogItemRead}> Read More</p>
              </div>
            </div>
            <div className={styles.BlogsItems}>
              <div className={styles.BlogsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.BlogsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <p className={styles.BlogItemDate}>August 19 2022</p>
                <hr />
                <p className={styles.BlogItemRead}> Read More</p>
              </div>
            </div>
            <div className={styles.BlogsItems}>
              <div className={styles.BlogsItemImage}>
                <img src={buildIndiaMovement} />
              </div>
              <div className={styles.BlogsItemContent}>
                <h3>JOIN BUILD INDIA MOMENT</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore.
                </p>
                <p className={styles.BlogItemDate}>August 19 2022</p>
                <hr />
                <p className={styles.BlogItemRead}> Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
