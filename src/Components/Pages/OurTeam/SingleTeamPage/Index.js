import React from "react";
import styles from "./singleTeam.module.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import TeamData from "../../../Assets/Data/OurTeam/ourteam.json";
import { useParams } from "react-router-dom";

export default function Index() {
  const { teamId } = useParams();
  const filteredData = TeamData.filter((item) => item.id == teamId);
  const { id, name, designation, content, img, qualfication } = filteredData[0];
  return (
    <>
      <div className={styles.SingleTeamMainContainer}>
        <div className={styles.SingleTeamBannerContainer}>
          <BannerTitle
            title="About Us"
            titleTag="h1"
            titleColor="#fff"
            localImg="banner-4.jpg"
            imgColor="696969"
          />
          <div className={styles.SingleTeamNameContainer}>
            <h1>{name}</h1>
          </div>
        </div>

        <div className={styles.SingleTeamContentContainer}>
          <div className={styles.SingleTeamImage}>
            <div>
              <img src={require(`../../../Assets/AboutUs/our-team/${img}`)} />
              <p>{name}</p>
              <p>
                <span> {designation}</span>
              </p>
              <p>
                <span>{qualfication}</span>
              </p>
            </div>
          </div>
          <div
            className={styles.SingleTeamContent}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </>
  );
}
