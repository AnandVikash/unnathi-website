import React from "react";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesL } from "react-icons/ri";
import TestimonialImg from "../../Assets/Home/Testimonials/testimonial-background.jpg";
export default function index() {
  var settings = {
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
      <div className={styles.TestimonialAlphaContainer}>
        <SecTitle
          title="Testimonials"
          titleTag="p"
          titleColor="#000"
          text=""
          textTag="p"
          textColor="#000"
        />
        <div className={styles.TestimonialContainer}>
          <Slider {...settings} className={styles.TestimonialSliderContainer}>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempor quis eros volutpat lobortis. Integer
                    hendrerit finibus euismod.
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempor quis eros volutpat lobortis. Integer
                    hendrerit finibus euismod. Phasellus at semper metus. Nullam
                    et est et ligula faucibus tristique sed id elit. Sed
                    porttitor eros velit, eget faucibus nisi ullamcorper a. In
                    hac habitasse
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempor quis eros volutpat lobortis. Integer
                    hendrerit finibus euismod.se
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempor quis eros volutpat lobortis. Integer
                    hendrerit finibus euismod. Phasellus at semper metus. Nullam
                    et est et ligula faucibus tristique sed id elit.
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus tempor quis etus. Nullam et est et ligula faucibus
                    tristique sed id elit. Sed porttitor eros velit, eget
                    faucibus nisi ullamcorper a. In hac habitasse
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.TestimonialItem}>
                <div className={styles.TestimonialItemDescContainer}>
                  <p className={styles.TestimonialItemDesc}>
                    <RiDoubleQuotesL />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus te id elit. Sed porttitor eros velit, eget faucibus
                    nisi ullamcorper a. In hac habitasse
                  </p>
                </div>
                <div className={styles.TestimonialItemAuthorContainer}>
                  <p className={styles.TestimonialItemAuthor}>User</p>
                  <p className={styles.TestimonialItemDesignation}>Student</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
