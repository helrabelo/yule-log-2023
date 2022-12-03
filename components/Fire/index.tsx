import styles from './Fire.module.css';

const Fire = () => {
  return (
    <div className={styles.content}>
      <div className={styles.light}></div>
      <div className={styles.fire}>
        <div className={styles.back}></div>
        <div className={styles.medium}></div>
        <div className={styles.front}></div>
      </div>
      <div className={styles.wood}>
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
        <div className={styles.stick}></div>
      </div>
    </div>
  );
};

export default Fire;