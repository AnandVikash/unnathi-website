import React from "react";

//styles
import styles from "./testimonial.module.css";

import Slider from "react-slick";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialNew() {
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
            <section
                className={styles.TestimonialAlphaContainer}
             
            >
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
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    </Slider>
                </section>
            </section>
        </>
    );
}
