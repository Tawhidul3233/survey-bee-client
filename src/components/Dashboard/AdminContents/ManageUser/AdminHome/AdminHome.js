import React from 'react';
import IncameChart from '../../AdminComponents/IncameChart';
import UserChart from '../../AdminComponents/UserChart';
import UserStatstics from '../../AdminComponents/UserStatstics';

const AdminHome = () => {
  return (
    <div className='  '>
      <UserStatstics></UserStatstics>
      <IncameChart></IncameChart>
      <UserChart></UserChart>
    </div>
  );
};

export default AdminHome;