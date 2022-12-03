import styles from './Flames.module.css';

const Flames = () => {
  return (
    <div>
      <div id="light" className={styles.light} />
      <div id="fire" className={styles.fire}>
        <span id="back" className={styles.back}></span>
        <span id="medium" className={styles.medium}></span>
        <span id="front" className={styles.front}></span>
      </div>
    </div>
  );
};

export default Flames;
