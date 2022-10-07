import { ProfileDescription } from './ProfileDescription';
import { ProfileStats } from './ProfileStats';

export const Profile = ({user}) => {
  console.log(user);
  return (
    <div className="profile">
      <ProfileDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        
      />

      <ProfileStats stats={user.stats}/>
    </div>
  );
};
