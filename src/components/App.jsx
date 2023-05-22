import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';

import user from './path/to/user.json';
import data from './path/to/data.json';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h2>Profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <h2>Friends</h2>
      <FriendList friends={friends} />
      <h2>Transaction Histori</h2>
      <TransactionHistory items={transactions}  />
    </div>
  );
};
