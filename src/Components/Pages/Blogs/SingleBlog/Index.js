import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleBlog.module.css";
export default function Index() {
  let { blogname, blogid } = useParams();

  return (
    <>
      {/* <div className={styles.blogContainer}>
        {blogname},{blogid}
      </div> */}
      <div className={styles.blogMainContainer}>
        <div className={styles.blogBannerContainer}>
          {/* <div className={styles.blobBannerBackground}></div> */}
          <img src="https://unnathi-test-website.web.app/static/media/blogs.cb86ba59557460ffdba6.jpg" />
          {/* What is the purpose of Lifearticle? */}
        </div>
        <div className={styles.blogContainer}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
