import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';
import friends from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
