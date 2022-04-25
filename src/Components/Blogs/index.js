import React from "react";
import SecTitle from "../Assets/ElementsUi/SecTitle";
import Blog from "./Blog/";
import styles from "./blog.module.css";
export default function index() {
  return (
    <>
      <div className={styles.blogMainContainer}>
        <div className={styles.blogTopContainer}>
          <div className={styles.blogTopContaineroverlay}>
            <SecTitle text="Blogs" tag="h3" colors="white" />
          </div>
        </div>
        <Blog />
      </div>
    </>
  );
}
