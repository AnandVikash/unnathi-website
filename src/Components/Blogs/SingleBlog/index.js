import React from "react";
import data from "../../Assets/Blog/Data/blog.json";

import SingleBlogItem from "./SingleBlogItem";
import styles from "./singleBlog.module.css";
import { useParams } from "react-router-dom";
export default function MainBlog() {
  const { blogtTitle, id } = useParams();
  const requiredBlog = data.filter((item) => {
    return item.id === parseInt(id);
  });
  return (
    <>
      <div className={styles.blogMainContainer}>
        <SingleBlogItem data={requiredBlog} />
      </div>
    </>
  );
}
