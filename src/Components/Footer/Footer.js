import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.logo}>
        <img alt="logo" src="/assets/logo.svg" />
      </div>
      <ul className={styles.listGroup}>
        <li>Features</li>
        <li>Link Shortening</li>
        <li>Branded Links</li>
        <li>Analytics</li>
      </ul>
      <ul className={styles.listGroup}>
        <li>Resources</li>
        <li>Blog</li>
        <li>Developers</li>
        <li>Support</li>
      </ul>
      <ul className={styles.listGroup}>
        <li>Company</li>
        <li>About</li>
        <li>Our Team</li>
        <li>Carreers</li>
        <li>Contact</li>
      </ul>
      <div className={styles.socialLinks}>
        <img alt="facebook" src="/assets/icon-facebook.svg" />
        <img alt="facebook" src="/assets/icon-twitter.svg" />
        <img alt="facebook" src="/assets/icon-pinterest.svg" />
        <img alt="facebook" src="/assets/icon-instagram.svg" />
      </div>
    </div>
  );
};

export default Footer;
