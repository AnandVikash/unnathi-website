import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import styles from "./ourblog.module.css";
import Button from "../../Assets/ElementsUi/Button";
import Slider from "react-slick";
export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <>
      <div className={styles.blogMainContainer}>
        <div className={styles.blogContainer}>
          <div className={styles.blogTexts}>
            <BgTitle
              text="OUR BLOGS "
              length="3"
              tag="p"
              textColor="white"
              secColor="black"
              backgroundColor="#005bea"
            />
            <SecTitle
              text="The Premier Source For Everything Blog"
              tag="h3"
              colors="black"
            />
            <br />
            <center>
              <HrLine height="5px" width="25%" color="#ccc" />
            </center>
            <p>
              Our Mission Is To Provide Quality English Language Instruction
              Through A Variety Of Courses To International And Local Students.
            </p>
            {/* <Button
              btntext="Click Here"
              bgcolor="linear-gradient(90deg, rgba(255,192,0,0.9223039557619923) 26%, rgba(233,255,0,1) 76%)"
              hoverBgColor="blue"
              color="blue"
              hoverColor="white"
            /> */}
          </div>
          <div className={styles.blogSlider}>
            <Slider {...settings}>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogItemContainer}>
                <div className={styles.blogItem}>
                  <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
                  <div className={styles.blogTextContainer}>
                    <div className={styles.blogText}>
                      <h5>Grow Your Business & Start</h5>
                      <p>
                        Our Mission Is To Provide Quality English Language
                        Instruction Through A Variety Of Courses To
                        International And Local Students.
                      </p>
                      <button>Read More</button>
                    </div>
                    <hr />
                    <div className={styles.BlogDates}>
                      <div>December 15, 2021 </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <center>
          <Button
            btntext="View Blogs"
            bgcolor="linear-gradient(90deg, rgba(255,192,0,0.9223039557619923) 26%, rgba(233,255,0,1) 76%)"
            hoverBgColor="blue"
            color="blue"
            hoverColor="white"
          />
        </center>
      </div>
    </>
  );
}
