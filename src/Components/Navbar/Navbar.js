import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = (props) => {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  document.onclick = (e) => {
    if (e.target.id !== "hamburgerIcon") {
      setIsShowMobileNav(false);
    }
  };
  return (
    <>
      <div className={styles.navbarContainerDesktop}>
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
      <div className={styles.navbarContainerMobile}>
        <img className={styles.mobileLogo} alt="logo" src="/assets/logo.svg" />
        <GiHamburgerMenu
          id="hamburgerIcon"
          onClick={() => {
            setIsShowMobileNav(true);
          }}
          className={styles.icon}
        />
        {isShowMobileNav && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={styles.mobileNav}
          >
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
              <hr />
              <li>Login</li>
              <li>
                <button>Sign Up</button>{" "}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
