import React from 'react';
import styles from './Network.module.css';

const Network = () => {
  return (
    <section className={styles.network}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Where <span className={styles.highlight}>Creators, Businesses & Partners</span> Grow Together.
        </h2>
        <p className={styles.subtitle}>One Login, Endless Opportunities.</p>

        <div className={styles.features}>
          <div className={styles.brandCard}>
            <div className={styles.logoWrapper}>
              <img src="/dark.svg" alt="HashFame" className={styles.brandLogo} style={{marginBottom: "12px"}}/>
            </div>
            <p className={styles.openFor}>Trusted by</p>
            <h3 className={styles.brandTitle}>
              Brands and 
              Agencies
            </h3>
          </div>

          <div className={styles.hireCard}>
            <div className={styles.hireContent}>
              <h3 className={styles.hireTitle}>
                Hire Trusted Influencers,<br />
                Agencies & Service<br /> Experts,
                Instantly.
              </h3>
              <p className={styles.hireText}>
                Need a Creator, Brand Partner, or Local Expert? Connect and collaborate within 2 clicks.
              </p>
            </div>
            <div className={styles.mockupWrapper}>
              <img src="/verifiedInfluencers.png" alt="Verified Influencers Interface" className={styles.mockupImage} />
            </div>
          </div>
           
        </div>
        <div className={styles.featurestwo}>
          

          <div className={styles.hireCardtwo}>
            <div className={styles.hireContent}>
              <h3 className={styles.hireTitle}>
                One Platform. Millions of Possibilities.
              </h3>
              <p className={styles.hireText}>
                Every influencer, store, service & brand<br /> on INFLU is verified for authenticity.<br />One login to connect,<br /> collaborate & grow.
              </p>
            </div>
            <div className={styles.mockupWrapper}>
              <img src="/verifiedCreators.png" alt="Verified Influencers Interface" className={styles.mockupImagetwo} />
            </div>
          </div>
           <div className={styles.indiaBackground}>
              <div className={styles.overlay}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.brandTitle} style={{color: "#ffffff"}}>
                  Powering Bharat&apos;s New Workforce.
                </h3>
                <p className={styles.brandDescription} style={{color: "rgba(255, 255, 255, 0.9)"}}>
                  Connecting creators across India with brands that value their authentic voice and reach.
                </p>
              </div>
            </div>
            
          
        </div>
      </div>
    </section>
  );
};

export default Network;