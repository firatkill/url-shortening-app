import React from "react";
import LinkedCards from "./LinkedCards/LinkedCards";
import styles from "./SectionTwo.module.css";

const SectionTwo = (props) => {
  return (
    <div className={styles.sectionTwoContainer}>
      <h3 className={styles.title}>Advanced Statistics</h3>
      <p className={styles.text}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <LinkedCards />
    </div>
  );
};

export default SectionTwo;
