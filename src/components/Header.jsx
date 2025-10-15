import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.navItems}>
          <a href="#" className={styles.navLink}>✨ For Creators</a>
          <a href="#" className={styles.navLink}>🔴 For Agencies</a>
            <a href="#" className={styles.navLink}>🔴 For Business</a>
         
          <button className={styles.getStarted}>Get Started</button>
        </div>
      </header>
    </div>
  );
};

export default Header;