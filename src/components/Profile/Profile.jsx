import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './ProfileStats';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
  return (
    <div className={css.profile}>
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />

      <ProfileStats stats={user.stats} />
    </div>
  );
};
