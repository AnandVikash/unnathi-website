import React from "react";
import Slider from "react-slick";
import SecTitle from "../SecTitle";
import styles from "./associates.module.css";
export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
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
      <div className={styles.AssociatesMainContainer}>
        <SecTitle
          title=""
          titleTag="p"
          titleColor="#808080"
          text="Our Associates"
          textTag="p"
          textColor="#000"
        />
        <div className={styles.AssociatesContainer}>
          <Slider {...settings}>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/partner/logo-3.png" />
                <p>lorem ipsum</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
