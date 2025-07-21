import styles from "./TransactionHistory.module.scss";
import PropTypes from "prop-types";
import { TransactionRow } from "./TransactionRow/TransactionRow";
export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th className={styles.table__date}>Type</th>
          <th className={styles.table__date}>Amount</th>
          <th className={styles.table__date}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={styles.table__row} key={id}>
            <TransactionRow type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.object.isRequired,
};
