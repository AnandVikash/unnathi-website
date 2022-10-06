import React from "react";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import { ImQuotesRight } from "react-icons/im";
import { ImQuotesLeft } from "react-icons/im";
import { RiDoubleQuotesL } from "react-icons/ri";
import TestimonialImg from "../../../Assets/Home/Testimonials/testimonial-background.jpg";
import TestimonialData from "../../../Assets/Data/Testimonials/testimonial.json";
export default function index() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
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
            {TestimonialData.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <div className={styles.TestimonialItem}>
                      <div className={styles.TestimonialItemDescContainer}>
                        <p className={styles.TestimonialItemDesc}>
                          <RiDoubleQuotesL />
                          {item.text}
                        </p>
                      </div>
                      <div className={styles.TestimonialItemAuthorContainer}>
                        <p className={styles.TestimonialItemAuthor}>
                          {item.name}
                        </p>
                        <p className={styles.TestimonialItemDesignation}>
                          {item.profession}
                        </p>
                        <p className={styles.TestimonialItemPlace}>
                          {item.place}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
