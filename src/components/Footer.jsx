// Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <div className={styles.logoSection}>
            <img src="/white.svg" alt="HashFame" className={styles.logo} />
            <p className={styles.description}>
              INFLU is an open network for influencers, creators, brands, and businesses — to connect, collaborate, and grow without limits.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram"><img src="/insta-icon.svg" alt="Instagram" /></a>
              <a href="#" aria-label="Facebook"><img src="/facebook-icon.svg" alt="Facebook" /></a>
              <a href="#" aria-label="YouTube"><img src="/youTube-icon.svg" alt="YouTube" /></a>
              <a href="#" aria-label="LinkedIn"><img src="/linkedin-icon.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.links}>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Influ 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;