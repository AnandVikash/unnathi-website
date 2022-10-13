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
            <div className="SecondEventDetails">
              <div className="SecondEventOrganizerHeader">
                <h1>Event organizer</h1>
              </div>
              <div className="SecondEventDetailsOrganizer">
                <div className="SecondEventOrganizerImg">
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-donet-1.png" />
                </div>
                <div className="SecondEventOrganizerImgContent">
                  <p className="SecondEventOrganizerHeading">Mike richard</p>
                  <p className="SecondEventOrganizerName">Managing director</p>
                  <p className="SecondEventOrganizerCompany">Care NGO ltd</p>
                </div>
              </div>
              <div className="SecondEventDetailsOrganizer">
                <div className="SecondEventOrganizerImg">
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-donet-2.png" />
                </div>
                <div className="SecondEventOrganizerImgContent">
                  <p className="SecondEventOrganizerHeading">
                    Jenifar lawrence
                  </p>
                  <p className="SecondEventOrganizerName">Entrepreneur</p>
                  <p className="SecondEventOrganizerCompany">Own business</p>
                </div>
              </div>
              <div className="SecondEventDetailsOrganizer">
                <div className="SecondEventOrganizerImg">
                  <img src="https://andit.co/projects/html/jago-welfare/assets/img/sidebar/rec-donet-3.png" />
                </div>
                <div className="SecondEventOrganizerImgContent">
                  <p className="SecondEventOrganizerHeading">David jovan</p>
                  <p className="SecondEventOrganizerName">Manager</p>
                  <p className="SecondEventOrganizerCompany">ABC Company</p>
                </div>
              </div>
            </div>
            <div className="ThirdSection">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0487342224183!2d77.57447261482264!3d13.032568590815954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e8059c75e1%3A0x20518939a8fddd6d!2sUnnathi%20Healing%20Foundation!5e0!3m2!1sen!2sin!4v1664782765574!5m2!1sen!2sin"
                height="350"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
