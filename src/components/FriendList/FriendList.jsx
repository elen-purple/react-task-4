import styles from "./FriendList.module.scss";
import PropTypes from "prop-types";
import { FriendItem } from "./FriendItem/FriendItem";
export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.friends__item} key={id}>
          <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
};
