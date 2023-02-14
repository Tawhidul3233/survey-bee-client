import React from 'react';
import IncameChart from '../../AdminComponents/IncameChart';
import UserChart from '../../AdminComponents/UserChart';
import UserStatstics from '../../AdminComponents/UserStatstics';

const AdminHome = () => {
  return (
    <div className='  '>
      <UserStatstics></UserStatstics>
      <div className=" md:flex mx-auto justify-center my-10 justify-evenly ">
        <IncameChart></IncameChart>
        <UserChart></UserChart>
      </div>

    </div>
  );
};

export default AdminHome;