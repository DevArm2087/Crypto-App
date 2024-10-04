import React from 'react';
import styles from './CoinDetails.module.css'; // استایل هدر

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>My Crypto App</h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>About</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Services</a></li>
          <li className={styles.navItem}><a href="#" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
