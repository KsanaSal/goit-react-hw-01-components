import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
      <ul className={css.friendList}>
        {friends.map(el => {
          return (
            <li className={css.item} key={el.id}>
              <span
                className={css.status}
                style={{ backgroundColor: `${el.isOnline ? 'green' : 'red'}` }}
              ></span>
              <img
                className={css.avatar}
                src={el.avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
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
