import React from "react";
import styles from "./SectionOne.module.css";

const SectionOne = (props) => {
  return (
    <div className={styles.sectionOneContainer}>
      <div className={styles.leftCol}>
        <h1>More than just shorter links</h1>
        <p>
          Build your own brand a recognition and get detailed insights on how
          your links are performaing.
        </p>
        <button>Get Started</button>
      </div>
      <div className={styles.rightCol}>
        <img alt="illustration" src="/assets/illustration-working.svg" />
      </div>
    </div>
  );
};

export default SectionOne;
