import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClassName = isOnline ? styles.online : styles.offline;

    return (
        <li className={styles.item}>
            <span className={`${styles.status} ${statusClassName}`}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};