// Footer.jsx
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
   
         <div className={styles.bottomSection}>
          <div className={styles.companyLogo}>
            <img src="/logo.svg" alt="INFLU" className={styles.brandLogo} />
          </div>
          
          <div className={styles.certifications}>
            <span className={styles.certBadge}>PCI DSS</span>
            <span className={styles.certBadge}>ISO 27001</span>
            <span className={styles.certBadge}>SOC</span>
            <span className={styles.certBadge}>NASSCOM</span>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook"><img src="/facebook-icon.svg" alt="Facebook" /></a>
            <a href="#" aria-label="Instagram"><img src="/insta-icon.svg" alt="Instagram" /></a>
            <a href="#" aria-label="YouTube"><img src="/youTube-icon.svg" alt="YouTube" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/linkedin-icon.svg" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.footerColumn}>
            <h3>Contact us:</h3>
            <p>hello@influ.one | +91 9663635025</p>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul className={styles.quickLinks}>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
        
       
      </div>
      
      <div className={styles.copyright}>
        <p>© 2025 INFLU MEDIA TECH</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;