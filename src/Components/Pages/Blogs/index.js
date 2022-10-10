import React from "react";
import Blog from "./Blog/";
import styles from "./blog.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";

export default function index() {
  return (
    <>
      <div className={styles.blogMainContainer}>
        <div className={styles.blogTopContainer}>
          <BannerTitle
            title="Blogs"
            titleTag="h1"
            titleColor="#fff"
            localImg="blogs.jpg"
            imgColor="696969"
          />
        </div>
        <Blog />
      </div>
    </>
  );
}
