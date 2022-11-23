import React from "react";
import styles from "./checker.module.css";
import { FaFlask } from "react-icons/fa";
export default function index() {
  return (
    <>
      <main className={styles.DoctorContainer}>
        <section className={styles.DoctorAboutContainer}>
          <article className={styles.DoctorImageContainer}>
            <section className={styles.DoctorImage}>
              <img src="https://unnathi-test-website.web.app/static/media/saraswathi-hegde.108b224179c9b911b147.png" />
              <article className={styles.DoctorTitle}>
                <section>
                  <p> Dr. Lorem ipsum </p>
                  <p> lorem ipsum , lorem ipsum </p>
                </section>
              </article>
            </section>
          </article>
          <article className={styles.DoctorDesc}>
            <p>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
            <p>
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
            <button>Click Here</button>
          </article>
        </section>
        <section className={styles.DoctorSpecialitiesContainer}>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
          <article>
            <FaFlask />
            <h3>Appointments</h3>
            <p>
              Same/next-day appointments, in person or over video, that start on
              time
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
