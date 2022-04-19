import React from "react";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import { ImQuotesRight } from "react-icons/im";
export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles.testimonialMainContainer}>
        <div className={styles.testimonialMaincontainer}>
          <Slider {...settings}>
            <div className={styles.testimonialItemContainer}>
              <div className={styles.testimonialItem}>
                <div className={styles.testionialImage}>
                  <div className={styles.colorBox}></div>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonial}>
                    When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly eggs
                    with applewood smoked bacon - are amazing!
                  </p>
                  <div className={styles.authors}>
                    <div>
                      <p className={styles.author}>Albert Wilson</p>
                    </div>
                    <div>
                      <ImQuotesRight
                        style={{
                          color: "red",
                          fontSize: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialItemContainer}>
              <div className={styles.testimonialItem}>
                <div className={styles.testionialImage}>
                  <div className={styles.colorBox}></div>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonial}>
                    When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly eggs
                    with applewood smoked bacon - are amazing!
                  </p>
                  <div className={styles.authors}>
                    <div>
                      <p className={styles.author}>Albert Wilson</p>
                    </div>
                    <div>
                      <ImQuotesRight
                        style={{
                          color: "red",
                          fontSize: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialItemContainer}>
              <div className={styles.testimonialItem}>
                <div className={styles.testionialImage}>
                  <div className={styles.colorBox}></div>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonial}>
                    When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly eggs
                    with applewood smoked bacon - are amazing!
                  </p>
                  <div className={styles.authors}>
                    <div>
                      <p className={styles.author}>Albert Wilson</p>
                    </div>
                    <div>
                      <ImQuotesRight
                        style={{
                          color: "red",
                          fontSize: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialItemContainer}>
              <div className={styles.testimonialItem}>
                <div className={styles.testionialImage}>
                  <div className={styles.colorBox}></div>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonial}>
                    When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly eggs
                    with applewood smoked bacon - are amazing!
                  </p>
                  <div className={styles.authors}>
                    <div>
                      <p className={styles.author}>Albert Wilson</p>
                    </div>
                    <div>
                      <ImQuotesRight
                        style={{
                          color: "red",
                          fontSize: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonialItemContainer}>
              <div className={styles.testimonialItem}>
                <div className={styles.testionialImage}>
                  <div className={styles.colorBox}></div>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
                </div>
                <div className={styles.testimonialText}>
                  <p className={styles.testimonial}>
                    When it comes to barbequing, there are two main schools of
                    thought for the techniques that you can use. Freshly eggs
                    with applewood smoked bacon - are amazing!
                  </p>
                  <div className={styles.authors}>
                    <div>
                      <p className={styles.author}>Albert Wilson</p>
                    </div>
                    <div>
                      <ImQuotesRight
                        style={{
                          color: "red",
                          fontSize: "100px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
{
  /*           <div className={styles.testimonialItem}>
            <div className={styles.imgBox}>
              <div className={styles.colorBox}></div>
              <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-835@2x@2x.jpg" />
            </div>
            <div className={styles.testimonialText}>
              <p className={styles.testimonial}>
                When it comes to barbequing, there are two main schools of
                thought for the techniques that you can use. Freshly eggs with
                applewood smoked bacon - are amazing!
              </p>
              <div className={styles.authors}>
                <div>
                  <p className={styles.author}>Albert Wilson</p>
                </div>
                <div>
                  <ImQuotesRight
                    style={{
                      color: "red",
                      fontSize: "100px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div> */
}
