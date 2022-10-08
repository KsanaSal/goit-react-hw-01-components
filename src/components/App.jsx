import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  // console.log(user);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
