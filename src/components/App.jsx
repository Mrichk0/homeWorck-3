import Profile from './User/user';
import Statistics from './Statistics/statistics';
import FriendList from './FriendList/FriendList';

import user from '../data/user';
import stats from '../data/statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { Box } from './Box/Box';

export const App = () => {
  return (
    <Box m="auto">
      <Profile props={user} />
      <Statistics title="what is it" stats={stats} />
      <FriendList props={friends} />
      <TransactionHistory props={transactions} />
    </Box>
  );
};
