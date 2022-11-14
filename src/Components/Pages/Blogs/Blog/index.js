import React from "react";
import styles from "./blog.module.css";
import data from "../../../Assets/Blog/Data/blog.json";
import { Link } from "react-router-dom";
import img from "../../../Assets/Blog/Images/blog-1.jpg";
export default function Blog() {
  const Newdata = data.reverse();
  return (
    <>
      <div className={styles.blogMainContainer}>
        <div className={styles.blogContainer}>
          {Newdata.map((items) => {
            const { id, title, urlIndex, excerpt, content, publishDate, img } =
              items;
            return (
              <>
                <div className={styles.blogItemContainer} key={id}>
                  <div className={styles.blogItem}>
                    <img src={require(`../../../Assets/Blog/Images/${img}`)} />
                    <div className={styles.blogTextContainer}>
                      <div className={styles.blogText}>
                        <h3>{title.substring(0, 50)}...</h3>
                        <p>{excerpt.substring(0, 105)}....</p>
                        <Link to={`/media/blogs/${urlIndex}/${id}`}>
                          <button>Read More</button>
                        </Link>
                      </div>
                      <hr />
                      <div className={styles.BlogDates}>
                        <div>{publishDate} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
