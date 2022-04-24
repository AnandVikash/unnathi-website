import React from "react";
import styles from "./service.module.css";
export default function index() {
  return (
    <>
      <div className={styles.serviceCardMainContainer}>
        <div className={styles.serviceCardContainer}>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}>----&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
