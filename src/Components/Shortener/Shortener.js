import React, { useState } from "react";
import styles from "./Shortener.module.css";
import ShortenerForm from "./ShortenerForm/ShortenerForm";

const Shortener = (props) => {
  const [shortenedArr, setShortenedArr] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      onMouseOut={() => {
        setIsFocused(false);
      }}
      className={styles.shortenerContainer}
    >
      <ShortenerForm
        onMouseOver={() => {
          setIsFocused(true);
        }}
        shortenedArr={shortenedArr}
        setShortenedArr={setShortenedArr}
      />
      <ul
        onMouseOver={() => {
          isFocused && setIsFocused(true);
        }}
        className={`${styles.listGroup} ${
          !isFocused ? styles.hide : styles.show
        }`}
      >
        {shortenedArr.map((elem) => {
          return (
            <li key={shortenedArr.indexOf(elem)} className={styles.listItem}>
              <p className={styles.link}>{elem.unshortened}</p>
              <div>
                <p className={styles.shortenedLink}>{elem.shortened}</p>
                <button
                  onClick={(e) => {
                    navigator.clipboard.writeText(elem.shortened);
                  }}
                >
                  Copy
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shortener;
