import React from "react";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import styles from "./singleBlog.module.css";
export default function ({ data }) {
  const blogData = data[0];
  return (
    <>
      <div className={styles.blogTopContainer}>
        <div className={styles.blogTopContaineroverlay}>
          <SecTitle text={blogData.title} tag="h3" colors="white" />
        </div>
      </div>
    </>
  );
}
