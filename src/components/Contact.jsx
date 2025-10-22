import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoWrapper}>
            <img src="/logo.svg" alt="HashFame" className={styles.logo} />
          </div>
          <h1 className={styles.title}>
            Built for <span className={styles.highlight}>Credibility.</span>
            <span className={styles.highlight}> Empowering</span> Creators.
            <span className={styles.highlight}> Powered By</span> Real Business.
          </h1>
          <div className={styles.downloadSection}>
            <div className={styles.storeButtons}>
              <img src="/playStoreImage.webp" alt="Get it on Google Play" />
              <img src="/appleImage.jpeg" alt="Download on the App Store" />
            </div>
          
          </div>
        </div>
        <div className={styles.rightSection}>
          <img src="/contactImg.png" alt="App Interface" className={styles.appImage} />
        </div>
      </div>
    </section>
  );
};

export default Contact;