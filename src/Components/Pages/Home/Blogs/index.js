import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import styles from "./Blogs.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import buildIndiaMovement from "../../../Assets/Home/Blogs/blogs.jpeg";
import { IoLocationSharp } from "react-icons/io5";

export default function Index() {
  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
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
          <Slider {...settings} className={styles.BlogsItemsContainer}>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
          </Slider>
        </div>
      </div>
    </>
  );
}
