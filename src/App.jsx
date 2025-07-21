import styles from "./App.module.scss";
import user from "./data/user.json";
import { Profile } from "./components/Profile/Profile";
import stats from "./data/statistics.json";
import { Statistics } from "./components/Statistics/Statistics";
import friends from "./data/friends.json";
import { FriendList } from "./components/FriendList/FriendList";
import transactions from "./data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className={styles.app}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
