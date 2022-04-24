import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import Progress from "../../Assets/ElementsUi/Progress";
import styles from "./ourSkill.module.css";
export default function index() {
  return (
    <>
      <div className={styles.ourSkillMainContainer}>
        <div className={styles.ourSkillContainer}>
          <div className={styles.ourSkillText}>
            <BgTitle text="OUR BENEFITS" length="3" tag="p" secColor="#000" />
            <br />
            <br />
            <SecTitle text="Why You Choose Us?" tag="h3" colors="#347deb" />
            <br />
            <br />
            <HrLine height="5px" width="20%" color="#ccc" />
            <br />
            <br />
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec
              Turpis Dolor, Mit Malesuada Non Leo A, Vehicula Ornare Nibh.
              Integer Eget Bibendum Nulla, Neced Hendrerit Magna. Nunc Vitae
              Ipsum Interdum, Varius Magna Ut, Sollicitudin Nunc. Pellentesque
              Habitant Morbi Tristique Senectus Et.Lorem Ipsum Dolor Sit Amet,
              Consectetur Adipiscing Elit. Donec Turpis.
            </p>
          </div>
          <div className={styles.ourSkillSkill}>
            <img
              width="80%"
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1650614747~exp=1650615347~hmac=e5ff2d1e4e6119c384c6650ef28e67ed6e967d9b074e127069a315d8f11d35a6"
            />
          </div>
        </div>
      </div>
    </>
  );
}
