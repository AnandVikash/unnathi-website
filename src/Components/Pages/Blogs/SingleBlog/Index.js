import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleBlog.module.css";
import "./single-blog.css";
import blogData from "../../../Assets/Blog/Data/blog.json";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function Index() {
  let { blogid } = useParams();

  let filteredBlog = blogData.filter((item) => item.id == blogid);
  let { title, content, author } = filteredBlog[0];

  return (
    <>
      {/* <div className={styles.blogContainer}>
        {blogname},{blogid}
      </div> */}
      <div className={styles.blogMainContainer}>
        <div className={styles.blogBannerContainer}>
          <div className={styles.blogBannerBackground}></div>
          <img src="https://unnathi-test-website.web.app/static/media/blogs.cb86ba59557460ffdba6.jpg" />
          <h1>{title}</h1>
        </div>
        <div className={styles.blogContentContainer}>
          <div className={styles.blogContent}>
            <div className={styles.blogFeatureImage}>
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/causes/details-big.png" />
            </div>
            <p className={styles.blogFeatureTitle}> {title}</p>
            <div
              className={styles.blogContentDesc}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
          <div className={styles.blogSidebar}>
            <div className={styles.blogAuthorContainer}>
              <div className={styles.blogAuthor}>
                {" "}
                <MdOutlineAccountCircle />
              </div>
              <div className={styles.blogAuthorDetails}>
                <p>About Author</p>
                <p className={styles.blogAuthorTitle}>{author.name}</p>
                <p>{author.designation}</p>
              </div>
            </div>
            <div className={styles.blogRecent}>
              <h3>Recent Blogs</h3>
              <div className={styles.blogRecentItem}>
                <div className={styles.blogRecentItemImage}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.blogRecentItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
              <div className={styles.blogRecentItem}>
                <div className={styles.blogRecentItemImage}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.blogRecentItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
              <div className={styles.blogRecentItem}>
                <div className={styles.blogRecentItemImage}>
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-cas-1.png" />
                </div>
                <div className={styles.blogRecentItemContent}>
                  <p>Stop early marriage and educate your girl child</p>
                  <p>
                    <span>3rd January, 2022</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
