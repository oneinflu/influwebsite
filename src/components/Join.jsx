import styles from './Join.module.css';

const Join = () => {
  return (
    <div className={styles.joinSection}>
      
      
      <h2 className={styles.joinTitle}>
       Influencer, Entrepreneur or Partner? You Belong Here.
      </h2>
      
      <p className={styles.joinText}>
       Built for doers, dreamers & deal-makers. Where growth is just a connection away.
      </p>
      
      <button className={styles.joinButton}>
        Join the Exclusive Network
        <span className={styles.arrowIcon}>→</span>
      </button>
    </div>
  );
};

export default Join;