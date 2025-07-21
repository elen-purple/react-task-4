import styles from "./Avatar.module.scss";
export const Avatar = ({ avatar }) => {
  return (
    <img className={styles.avatar} width={300} src={avatar} alt="user avatar" />
  );
};
