import styles from "./FriendItem.module.scss";
import PropTypes from "prop-types";
export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span data-online={isOnline} className={styles.online}></span>
      <img className={styles.avatar} width={300} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
