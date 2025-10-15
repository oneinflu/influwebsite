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
            Built for <span className={styles.highlight}>Credibility.</span><br />
            <span className={styles.highlight}>Empowering</span> Creators.<br />
            <span className={styles.highlight}>Powered By</span> Real Business.
          </h1>
          <div className={styles.downloadSection}>
            <div className={styles.storeButtons}>
              <img src="/playStoreImage.svg" alt="Get it on Google Play" />
              <img src="/appleImage.svg" alt="Download on the App Store" />
            </div>
            <div className={styles.qrSection}>
              <div className={styles.scannerLink}>
                <img src="/qr.svg" alt="QR Code" className={styles.qrCode} />
                <img src="/doodle.svg" alt="Scan to Download" className={styles.scanImage} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img src="/contactImg.webp" alt="App Interface" className={styles.appImage} />
        </div>
      </div>
    </section>
  );
};

export default Contact;