import React from 'react';
import { useState } from 'react';
import UserHeader from '../UserHeader/UserHeader';
import EachUser from './EachUser';
import Tttt from './EachUser';

const UserTable = ({userData , search}) => {

// console.log(userData)

  return (
    <div className='mx-3'>
      {/* <UserHeader userData={userData} setUserData={setUserData} data={data} search={search}  ></UserHeader> */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr className=''>
              <th>User Id</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Job Role</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {
              userData?.filter((u) => {
                return search === ' ' ? u : u?.userName?.toLowerCase().includes(search) ||  u?.email?.toLowerCase().includes(search) || u?.jobRole?.toLowerCase().includes(search) || u?._id?.toLowerCase().includes(search)
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