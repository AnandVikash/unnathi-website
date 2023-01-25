import React from "react";
import Slider from "react-slick";
import SecTitle from "../SecTitle";
import styles from "./associates.module.css";
import associate1 from "../../../Assets/Associates/associate-1.jpg";
import associate2 from "../../../Assets/Associates/associate-2.jpg";
import associate3 from "../../../Assets/Associates/associate-3.jpg";
import associate4 from "../../../Assets/Associates/associate-4.jpg";
import associate5 from "../../../Assets/Associates/associate-5.jpg";
import associate6 from "../../../Assets/Associates/associate-6.jpg";

export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
                <img src={associate1} />
                <p>Department of Primary and Secondary Education, Karnataka</p>
              </div>
            </div>

            <div>
              <div className={styles.AssociateImg}>
                <img src={associate2} />
                <p>Bangalore North University (BNU), Kolar</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src={associate3} />
                <p>Government Ayurvedic Medical College, Bengaluru</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src={associate4} />
                <p>National Service Scheme, Karnataka</p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src={associate5} />
                <p>GarbhaGudi IVF Center, Bengaluru </p>
              </div>
            </div>
            <div>
              <div className={styles.AssociateImg}>
                <img src={associate6} />
                <p>DVS Group of Institutions, Shimoga </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
