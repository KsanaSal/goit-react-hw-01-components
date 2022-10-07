import PropTypes from 'prop-types';

const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export { ProfileDescription };
