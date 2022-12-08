import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./SingleAction.module.css";
import "./single-action.css";
import actionData from "../../../../Assets/Data/ActionSpeakAboutUs/events.json";
import { MdOutlineAccountCircle } from "react-icons/md";
export default function Index() {
  const [readMoreShow, setReadMoreShow] = useState(false);
  let { actionid } = useParams();

  let filteredBlog = actionData.filter((item) => item.id == actionid);
  const { title, content, author, readmore, bannerCustomImg } = filteredBlog[0];

  return (
    <>
      {/* <div className={styles.blogContainer}>
        {blogname},{blogid}
      </div> */}
      <div className={styles.blogMainContainer}>
        <div className={styles.blogBannerContainer}>
          <div className={styles.blogBannerBackground}></div>
          {/* <img
            src={require(`../../../../Assets/Media/actionSpeakes/${bannerCustomImg}`)}
          /> */}
          {/* "https://unnathi-test-website.web.app/static/media/blogs.cb86ba59557460ffdba6.jpg" */}
          <h1>{title}</h1>
        </div>
        <div className={styles.blogContentContainer}>
          <div className={styles.blogContent}>
            <div className={styles.blogFeatureImage}>
              <img
                src={require(`../../../../Assets/Media/actionSpeakes/${bannerCustomImg}`)}
              />
            </div>
            <p className={styles.blogFeatureTitle}> {title}</p>
            <div
              className={styles.blogContentDesc}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            {readmore && (
              <div className={styles.blogfeatureButton}>
                <button onClick={() => setReadMoreShow(!readMoreShow)}>
                  {readMoreShow ? "Read Less " : "Read More "}
                </button>
              </div>
            )}
            {readmore && readMoreShow && (
              <div
                className={styles.blogContentDesc}
                dangerouslySetInnerHTML={{ __html: readmore }}
              ></div>
            )}
          </div>
          <div className={styles.blogSidebar}>
            {/* <div className={styles.blogAuthorContainer}>
              <div className={styles.blogAuthor}>
                {" "}
                <MdOutlineAccountCircle />
              </div>
              <div className={styles.blogAuthorDetails}>
                <p>About Author</p>
                <p className={styles.blogAuthorTitle}>{author.name}</p>
                <p>{author.designation}</p>
              </div>
            </div> */}
            <div className={styles.blogRecent}>
              <h3>Recent Actions</h3>
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
