import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Modal from './Modal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" className={styles.logoImage} />
          </div>
          <div className={styles.navItems}>
            <button className={styles.getStarted} onClick={openModal}>Get Started</button>
          </div>
        </header>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;