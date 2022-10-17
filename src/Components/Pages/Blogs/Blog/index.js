import React from "react";
import styles from "./blog.module.css";
import data from "../../../Assets/Blog/Data/blog.json";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <>
      <div className={styles.blogMainContainer}>
        <div className={styles.blogContainer}>
          {data.map((items) => {
            const { id, title, urlIndex, excerpt, content, publishDate } =
              items;
            return (
              <>
                <div className={styles.blogItemContainer} key={id}>
                  <div className={styles.blogItem}>
                    <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/inspired-woman-NEARSKQ@2x-768x531.jpg" />
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
