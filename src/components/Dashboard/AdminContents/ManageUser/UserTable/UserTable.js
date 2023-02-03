import React from 'react';
import { useState } from 'react';
import UserHeader from '../UserHeader/UserHeader';
import EachUser from './EachUser';
import Tttt from './EachUser';

const UserTable = ({userData , search}) => {



  return (
    <div>
      {/* <UserHeader userData={userData} setUserData={setUserData} data={data} search={search}  ></UserHeader> */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Job Level</th>
              <th>Job Role</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {
              userData?.filter((u) => {
                return search === ' ' ? u : u?.name?.toLowerCase().includes(search) ||  u?.email?.toLowerCase().includes(search) || u?.role.toLowerCase().includes(search) || u?.id?.toLowerCase().includes(search) || u?.level?.toLowerCase().includes(search)
              }).map((d, i) => <EachUser key={i} d={d}> 
              </EachUser>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;