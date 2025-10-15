import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=10",
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=13",
    "https://i.pravatar.cc/150?img=14",
    "https://i.pravatar.cc/150?img=15",
    "https://i.pravatar.cc/150?img=16",
    "https://i.pravatar.cc/150?img=17",
    "https://i.pravatar.cc/150?img=18",
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Connect. Collaborate. <span className={styles.highlight}>Earn Instantly</span></h1>
        <p className={styles.subtitle}>
         Where influencers, brands & services unite to collaborate, grow audiences, and unlock endless earning potential.
        </p>
        <div className={styles.appStores}>
          <img src="/playStoreImage.svg" alt="Get it on Google Play" className={styles.storeButton} />
          <img src="/appleImage.svg" alt="Download on the App Store" className={styles.storeButton} />
        </div>
        <div className={styles.bannerContainer}>
          <img src="/bannerImage.webp" alt="App Interface" className={styles.bannerImage} />
        </div>
        <div className={styles.creatorStats}>
          <div className={styles.creatorCount}>83,000+</div>
          <div className={styles.creatorLabel}>Users</div>
        </div>
        <div className={styles.creatorsImage}>
          <div className={styles.scrollTrack}>
            {[...avatars, ...avatars].map((avatar, index) => (
              <img 
                key={index} 
                src={avatar} 
                alt="creator" 
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;