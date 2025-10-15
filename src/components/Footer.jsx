// Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
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
        
        <div className={styles.column}>
          <h3>Browse Influ</h3>
          <ul>
            <li><a href="#">Find Influencers</a></li>
            <li><a href="#">For Creators</a></li>
            <li><a href="#">For Talent Managers</a></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>General</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h3>Services For You</h3>
          <ul>
            <li><a href="#">Influencer Marketing</a></li>
            <li><a href="#">Talent Management</a></li>
            <li><a href="#">Meme Marketing</a></li>
            <li><a href="#">UGC Creation & Ads</a></li>
            <li><a href="#">Event Marketing</a></li>
            <li><a href="#">Public Relations</a></li>
            <li><a href="#">Video Production</a></li>
            <li><a href="#">Branding & Design</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© Influ 2025 | All Rights Reserved</p>
      
      </div>
    </footer>
  );
};

export default Footer;