import React, { useRef } from "react";
import styles from "./ShortenerForm.module.css";

const ShortenerForm = (props) => {
  const inputRef = useRef();

  const fetchUrl = async (url) => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    return data;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await fetchUrl(inputRef.current.value);
    if (data.ok) {
      if (props.shortenedArr.length >= 5) {
        props.setShortenedArr([
          {
            unshortened: inputRef.current.value,
            shortened: data.result.short_link,
          },
          ...props.shortenedArr.slice(0, 4),
        ]);
      } else {
        props.setShortenedArr([
          {
            unshortened: inputRef.current.value,
            shortened: data.result.short_link,
          },
          ...props.shortenedArr,
        ]);
      }
    }
  };

  return (
    <form
      onMouseOver={props.onMouseOver}
      onSubmit={submitHandler}
      className={styles.shortener}
    >
      <input
        ref={inputRef}
        required
        type="url"
        placeholder="Shorten a link here..."
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default ShortenerForm;
