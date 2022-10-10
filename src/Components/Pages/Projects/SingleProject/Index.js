import React from "react";
import styles from "./singleProject.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
export default function Index() {
  return (
    <>
      <div>
        <BannerTitle
          title="Project Title"
          titleTag="h1"
          titleColor="#fff"
          localImg="banner-4.jpg"
          imgColor="696969"
        />
        <div className="SingleEventContainer">
          <div className="SingleEventContent">
            <div className="SingleEventContentImg">
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/causes/details-big.png" />
            </div>
            <div className="SingleEventContentDesc">
              <h3>Give children a good education and a better life</h3>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available but the majority.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrang hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true.
              </p>
              <p className="SingleEventTitle">
                We want to ensure the education for the kids.
              </p>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable.
              </p>
              <p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                    phaedrum.
                  </li>
                  <li>There are many variations of passages of Lorem Ipsum.</li>
                  <li>
                    Available but the majority have alteration in some injected
                    or words.
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum which
                    don't look even slightly believable.
                  </li>
                </ul>
              </p>
              <p>
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable.
              </p>
            </div>
          </div>
          <div className="SingleEventDetails">
            <div className="SingleEventDetailsOrganizer">
              <div className="SingleEventOrganizerImg">
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/project_organizer.png" />
              </div>
              <div className="SingleEventOrganizerImgContent">
                <p className="SingleEventOrganizerHeading">
                  Project organizer:
                </p>
                <p className="SingleEventOrganizerName">Polin sarika</p>
                <p className="SingleEventOrganizerCompany">
                  Manager at ABC company
                </p>
                <div className="SingleEventOrganizerContact">
                  <div className="SingleEventContactItem">
                    <div className="SingleEventContactItemIcon">
                      <BsTelephone />
                    </div>
                    <div className="SingleEventContactItemDetails">
                      1234567890
                    </div>
                  </div>
                  <div className="SingleEventContactItem">
                    <div className="SingleEventContactItemIcon">
                      <BsEnvelope />
                    </div>
                    <div className="SingleEventContactItemDetails">
                      1234567890
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
