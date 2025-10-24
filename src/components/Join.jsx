import styles from './Join.module.css';
import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Join = () => {
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
    <div className={`${styles.joinSection} ${isScrolled ? styles.scrolled : ''}`}  >
      
      
      <h2 className={styles.joinTitle} >
       Influencer, Entrepreneur or Partner? You Belong Here.
      </h2>
      
      <p className={styles.joinText}>
       Built for doers, dreamers & deal-makers. Where growth is just a connection away.
      </p>
      
      <button className={styles.joinButton} onClick={openModal}>
        Join the Exclusive Network
        <span className={styles.arrowIcon}>→</span>
      </button>
    </div>
<Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
  
};

export default Join;