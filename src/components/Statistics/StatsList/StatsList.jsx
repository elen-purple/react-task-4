import styles from "./StatsList.module.scss";
import { StatsItem } from "../StatsItem/StatsItem";
export const StatsList = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map(({ name, value }, index) => (
        <li className={styles.list__item} key={index}>
          <StatsItem name={name} value={value} />
        </li>
      ))}
    </ul>
  );
};
