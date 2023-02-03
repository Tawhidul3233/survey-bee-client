import React from 'react';
import AdminMenu from '../AdminMenu/AdminMenu';
import UserHeader from './UserHeader/UserHeader';
import UserTable from './UserTable/UserTable';

const ManageUser = () => {
  return (
    <div className=' '>
      <div className=" flex ">
        <div className=" w-2/5 sm:w-1/4 ">
          <AdminMenu> </AdminMenu>
        </div>
        <div className=" w-3/5 sm:w-3/4 right-0 ">
        <UserHeader> </UserHeader>
        </div>
      </div>
      
    </div>
  );
};

export default ManageUser;