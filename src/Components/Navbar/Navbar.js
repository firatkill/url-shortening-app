import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <img alt="logo" src="/assets/logo.svg" />
        <button className={styles.navButton}>Features</button>
        <button className={styles.navButton}>Pricing</button>
        <button className={styles.navButton}>Resources</button>
      </div>
      <div className={styles.navbarRight}>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.signUpButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
