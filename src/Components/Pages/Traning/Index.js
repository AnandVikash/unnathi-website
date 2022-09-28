import React from "react";
import styles from "./traning.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Traning"
        titleTag="h1"
        titleColor="#fff"
        img="090b2b.png"
        imgColor="696969"
      />
      <div className={styles.TraningMainContainer}>
        <div className={styles.TraningContainer}>
          <p>
            Being healthy is our right, is not a choice. There is an ancient
            method of keeping fit the Physical, Emotional and Mental levels. It
            is through Yogic healing. A trained yogic healer is capable of
            healing self and also empowered to heal others. Self-healing is a
            skill with a specific knowledge. The knowledge should be imparted
            through Guru / Trainer. Unnathi is into yogic healing to the needy,
            it is also training traditionally the ancient knowledge of Yogic
            Healing to the interested. Unnathi has found the techniques of
            healing through research and the proven methods. If there is one
            yogic healer in a family, the family will be healthy and helps to
            maintain the overall wellness of the family. Vision of Unnathi is to
            “make one yogic healer per family”.{" "}
          </p>
          <p>
            Unnathi is into training since 2010. The trained yogic healers are
            practicing and getting good results. To learn yogic healing at
            Unnathi there is no prerequisites with respect to education.
            Candidates with age above 16 years are eligible to enrol and undergo
            training in yogic healing and practice. There are different levels
            of training from Unnathi. Foundation course is a two days course,
            which is developed for the beginner. This will enable individual to
            self-heal also heal others under the guidance of a trainer. Advanced
            courses are designed to master the techniques and develop spiritual
            awareness in individual. You can also contribute to research cell of
            Unnathi while you practice yogic healing.
          </p>
          <p>
            One of the popular course “Kriyashakthi” is specially designed for a
            practitioner to attract prosperity in abundance.{" "}
          </p>
          <p>
            You may contact Unnathi to register to forth coming batches of
            Foundation Course on Yogic Healing.
          </p>
          <p>
            Those who have completed Foundation Course are informed to be in
            touch with Unnathi to join advanced courses of Yogic healing.
          </p>
        </div>
      </div>
    </>
  );
}