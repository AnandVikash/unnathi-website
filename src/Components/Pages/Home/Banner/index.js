import React, { useEffect } from "react";
import "./banner.css";
import Slider from "react-slick";
import banner1 from "../../../Assets/Home/Banner/live-banner/build-india.jpg";
import banner2 from "../../../Assets/Home/Banner/live-banner/healing.jpg";
import banner3 from "../../../Assets/Home/Banner/live-banner/traning-banner.jpg";
import banner4 from "../../../Assets/Home/Banner/live-banner/home-banner-3.jpg";

// import banner11 from "../../../Assets/Home/Banner/1520x500-1.jpg";
// import banner2 from "../../../Assets/Home/Banner/1520x500-2.jpg";
// import banner3 from "../../../Assets/Home/Banner/1520x500-3.jpg";
// import banner4 from "../../../Assets/Home/Banner/1520x500-4.jpg";

// import banner5 from "../../../Assets/Home/Banner/banner-5.jpg";
// import banner6 from "../../../Assets/Home/Banner/banner-6.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Index() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    autoplaySpeed: 811111000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //   import banner11 from "../../../Assets/Home/Banner/pixelmatching1.jpg";
  // import banner2 from "../../../Assets/Home/Banner/banner-1-1.jpg";
  // import banner3 from "../../../Assets/Home/Banner/three-join-3.jpg";
  // import banner4 from "../../../Assets/Home/Banner/banner-4.jpg";
  // React.useEffect(() => {
  //   aos.init({
  //     once: false,
  //   });
  // }, []);

  // const [ref, inview] = useInView();
  // console.log(inview);
  // useEffect(() => {
  //   console.log("rag");
  //   console.log(inview);
  // });

  return (
    <>
      {" "}
      <marquee>
        {" "}
        <Link to="/media/events">Current Events </Link>
      </marquee>
      {/* style={{ backgroundImage: `url(${banner1})`, border:"2px solid red" }} */}
      <div className="BannerAlphaContainer" data-aos="fade-up">
        <div className="BannerContainer">
          <Slider {...settings}>
            <div>
              <div className="BannerSliderContainer">
                <img src={banner1} />

                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Unnathi’s Build India Movement:
                  </p>
                  <p className="BannerSliderDesc">
                    Counseling session in progress
                  </p>
                  <Link to="/projects/build-india-movement/1">Read More</Link>
                </div>
              </div>
            </div>
            <div>
              <div className="BannerSliderContainer">
                <img src={banner2} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">Yogic Healing</p>
                  <p className="BannerSliderDesc">
                    Healing services to provide relief
                  </p>
                  <Link to="/healing">Read More</Link>
                </div>
              </div>
            </div>
            <div>
              <div className="BannerSliderContainer">
                <img src={banner3} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">Training</p>
                  <p className="BannerSliderDesc">Unnathi trains to empower</p>
                  <Link to="/training">Read More</Link>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner4} />

                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Personality is from a person.
                  </p>
                  <p className="BannerSliderDesc">
                    Good intuition and a proper guidance may help a person to
                    turn into a personality.
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner11} />
                <motion.div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Share your love to make someone’s life better1
                  </p>
                  <p className="BannerSliderDesc">
                    Life is a loving gift from God! It becomes better by giving
                    love that each one is entitled to.
                  </p>
                </motion.div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner2} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Physical, Emotional and Mental wellness.
                  </p>
                  <p className="BannerSliderDesc">
                    It is important to keep ourselves fit to see the beautiful
                    creations of God and to contribute our best to this planet.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner2} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Learning and Teaching are meaningful jobs.
                  </p>
                  <p className="BannerSliderDesc">
                    Learning is endless. Universe is Great teacher for lessons
                    unknown. Be a Learner!
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner3} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Learning and Teaching are meaningful jobs.
                  </p>
                  <p className="BannerSliderDesc">
                    Learning is endless. Universe is Great teacher for lessons
                    unknown. Be a Learner!
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner4} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Yogic healing is a powerful tool to heal oneself and others.
                  </p>
                  <p className="BannerSliderDesc">
                    Be a healer to create a positive vibration in the
                    individual. Be an instrument for healing energy.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner5} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Success is wrapped in failures, unwrap it!
                  </p>
                  <p className="BannerSliderDesc">
                    Our kind words may heal the pain of an individual and
                    motivate to explore life.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="BannerSliderContainer">
                <img src={banner6} />
                <div className="BannerSliderContent">
                  <p className="BannerSliderTitle">
                    Personality is from a person.
                  </p>
                  <p className="BannerSliderDesc">
                    Good intuition and a proper guidance may help a person to
                    turn into a personality.
                  </p>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
      {/* <div className={styles.bannerAlphaContainer}>
        <div className={styles.bannerMainContainer}>
          <div className={styles.bannerTextContainer}>
            <div className={styles.bannerTextTitle}>
              <p>Share your love to</p>
              <p>make someone’s</p>
              <p>life better</p>
            </div>
            <p className={styles.bannerText}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a type and scrambled.
            </p>
            <Button
              btntext="Register"
              bgcolor="#A82C24"
              hoverBgColor="#fff"
              color="#fff"
              hoverColor="#A82C24"
            />
          </div>
          <div className={styles.bannerImgContainer}></div>
        </div>
      </div> */}
    </>
  );
}
