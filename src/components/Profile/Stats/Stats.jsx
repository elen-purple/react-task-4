import styles from "./Stats.module.scss";

export const Stats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.stats__item}>
        <span className={styles.stats__desc}>Followers</span>
        <span className={styles.stats__number}>{stats.followers}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__desc}>Views</span>
        <span className={styles.stats__number}>{stats.views}</span>
      </li>
      <li className={styles.stats__item}>
        <span className={styles.stats__desc}>Likes</span>
        <span className={styles.stats__number}>{stats.likes}</span>
      </li>
    </ul>
  );
};
