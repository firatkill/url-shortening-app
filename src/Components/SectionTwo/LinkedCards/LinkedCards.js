import React from "react";
import styles from "./LinkedCards.module.css";

const LinkedCards = (props) => {
  return (
    <div className={styles.linkedCardsContainer}>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt="cardImg" src="/assets/icon-brand-recognition.svg" />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>Brand Recognition</h5>
          <p className={styles.cardText}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt="cardImg" src="/assets/icon-detailed-records.svg" />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>Detailed Records</h5>
          <p className={styles.cardText}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img alt="cardImg" src="/assets/icon-fully-customizable.svg" />
        </div>
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>Fully Customizable</h5>
          <p className={styles.cardText}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkedCards;
