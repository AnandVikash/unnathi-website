import React from "react";
import styles from "./ourTeam.module.css";
import Slider from "react-slick";
import BgTitle from "../../ElementsUi/BgTitle";
import HrLine from "../../ElementsUi/HrLine";
import SecTitle from "../../ElementsUi/SecTitle";
export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className={styles.ourTeamMainContainer}>
        <div className={styles.testimonilasContainer}>
          <BgTitle
            text="OUR SERVICES "
            length="3"
            tag="p"
            textColor="black"
            secColor="white"
            backgroundColor="#ffe91c"
          />
          <SecTitle
            text="Demand First-Rate Best Services"
            tag="h3"
            colors="#347deb"
          />
          <center>
            <HrLine height="5px" width="20%" color="#ccc" />{" "}
          </center>
          <div className={styles.ourTeamSlider}>
            <Slider {...settings}>
              <div className={styles.ourTeamSliderItem}>
                <div className={styles.ourTeamSliderImage}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-8446@2x@2x.jpg" />
                </div>
                <div className={styles.ourTeamSliderDetails}>
                  <p className={styles.ptag}>Nina Cooper</p>
                  <span> Web designer</span>
                </div>
              </div>
              <div className={styles.ourTeamSliderItem}>
                <div className={styles.ourTeamSliderImage}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-8446@2x@2x.jpg" />
                </div>
                <div className={styles.ourTeamSliderDetails}>
                  <p className={styles.ptag}>Nina Cooper</p>
                  <span> Web designer</span>
                </div>
              </div>
              <div className={styles.ourTeamSliderItem}>
                <div className={styles.ourTeamSliderImage}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-8446@2x@2x.jpg" />
                </div>
                <div className={styles.ourTeamSliderDetails}>
                  <p className={styles.ptag}>Nina Cooper</p>
                  <span> Web designer</span>
                </div>
              </div>
              <div className={styles.ourTeamSliderItem}>
                <div className={styles.ourTeamSliderImage}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-8446@2x@2x.jpg" />
                </div>
                <div className={styles.ourTeamSliderDetails}>
                  <p className={styles.ptag}>Nina Cooper</p>
                  <span> Web designer</span>
                </div>
              </div>
              <div className={styles.ourTeamSliderItem}>
                <div className={styles.ourTeamSliderImage}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-8446@2x@2x.jpg" />
                </div>
                <div className={styles.ourTeamSliderDetails}>
                  <p className={styles.ptag}>Nina Cooper</p>
                  <span> Web designer</span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
