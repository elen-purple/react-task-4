import styles from "./StatsItem.module.scss";
import PropTypes from "prop-types";
export const StatsItem = ({ name, value }) => {
  return (
    <>
      <span className={styles.name}>.{name}</span>
      <span className={styles.value}>{value}%</span>
    </>
  );
};

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
