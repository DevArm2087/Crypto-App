// Footer.jsx
import React from 'react';
import styles from './CoinDetails.module.css'; // استایل فوتر

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Links</h2>
          <ul className={styles.sectionList}>
            <li><a href="#" className={styles.sectionLink}>Home</a></li>
            <li><a href="#" className={styles.sectionLink}>About</a></li>
            <li><a href="#" className={styles.sectionLink}>Services</a></li>
            <li><a href="#" className={styles.sectionLink}>Contact</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Social Media</h2>
          <ul className={styles.sectionList}>
            <li><a href="#" className={styles.sectionLink}>Facebook</a></li>
            <li><a href="#" className={styles.sectionLink}>Twitter</a></li>
            <li><a href="#" className={styles.sectionLink}>Instagram</a></li>
            <li><a href="#" className={styles.sectionLink}>LinkedIn</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <ul className={styles.sectionList}>
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
