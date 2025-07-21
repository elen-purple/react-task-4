import styles from "./Statistics.module.scss";
import PropTypes from "prop-types";
import { Title } from "./Title/TItle";
import { StatsList } from "./StatsList/StatsList";
export const Statistics = ({ title = "", stats }) => {
  return (
    <section className={styles.stats}>
      <Title title={title} />
      <StatsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
