import PropTypes from "prop-types";
import styles from "./Profile.module.scss";

import { Avatar } from "./Avatar/Avatar";
import { Username } from "./Username/Username";
import { Tag } from "./Tag/Tag";
import { Location } from "./Location/Location";
import { Stats } from "./Stats/Stats";
export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <Avatar avatar={avatar} />
        <Username username={username} />
        <Tag tag={tag} />
        <Location location={location} />
      </div>
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
};
