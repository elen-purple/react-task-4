import styles from "./TransactionRow.module.scss";
import PropTypes from "prop-types";
export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <>
      <td className={styles.date}>{type}</td>
      <td className={styles.date}>{amount}</td>
      <td className={styles.date}>{currency}</td>
    </>
  );
};

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
