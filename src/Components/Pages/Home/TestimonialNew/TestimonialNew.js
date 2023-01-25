import React from "react";

//styles
import styles from "./testimonial.module.css";

import Slider from "react-slick";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import { RiDoubleQuotesL } from "react-icons/ri";

import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

import TestimonialData from "../../../Assets/Data/Testimonials/testimonial.json";
export default function TestimonialNew() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.TestimonialAlphaContainer}>
        <SecTitle
          title="Testimonials"
          titleTag="p"
          titleColor="#000"
          text=""
          textTag="p"
          textColor="#000"
        />
        <section className={styles.TestimonialContainer}>
          <Slider {...settings} className={styles.TestimonialSliderContainer}>
            {TestimonialData.map((item) => {
              return (
                <>
                  <article className={styles.TestimonialSliderItem}>
                    <section className={styles.TestimonialSliderCard}>
                      <div className={styles.TestimonialImgContainer}>
                        <div className={styles.TestimonialLeftIcon}>
                          <ImQuotesLeft />
                        </div>
                        <div className={styles.TestimonialRighttIcon}>
                          <ImQuotesRight />
                        </div>
                        <img src="https://www.shutterstock.com/image-vector/user-design-260nw-236977519.jpg" />
                        <div className={styles.TestimonialImgContent}>
                          <p className={styles.TestimonialItemAuthor}>
                            <p> {item.name}</p>
                          </p>
                          <p className={styles.TestimonialItemDesignation}>
                            {item.profession}
                          </p>
                          <p className={styles.TestimonialItemPlace}>
                            {item.place}
                          </p>

                          <p className={styles.TestimonialItemDesc}>
                            <ImQuotesLeft /> {item.text}
                          </p>
                        </div>
                      </div>
                    </section>
                  </article>
                </>
              );
            })}

            {/* <article className={styles.TestimonialSliderItem}>1</article>
            <article className={styles.TestimonialSliderItem}>1</article>
            <article className={styles.TestimonialSliderItem}>1</article>
            <article className={styles.TestimonialSliderItem}>1</article>
            <article className={styles.TestimonialSliderItem}>1</article>
            <article className={styles.TestimonialSliderItem}>1</article> */}
          </Slider>
        </section>
      </section>
    </>
  );
}
