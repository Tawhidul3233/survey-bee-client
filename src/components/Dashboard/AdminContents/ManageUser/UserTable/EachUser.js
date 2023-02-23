import React from 'react';
import { useState } from 'react';
import UserDeleteModal from './UserDeleteModal';
const EachUser = ({ d }) => {
  const [deleteUser, setDeleteUser] = useState({})
  // console.log(d)
  return (
    <>
      <tr>
        <td> {d?._id}    </td>
        <td> {d?.userName}  </td>
        <td> {d?.email} </td>
        <td> {d?.jobRole}  </td>
        <td> {d?.userType}  </td>
        <td >
          {/* <button onClick={() => setDeleteUser(d)} className='btn btn-xs bg-red-600 text-white border-none text-[10px]'> Remove </button> */}
          <label htmlFor="delete-modal" className='ml-2 btn btn-xs btn-outline bg-red-500 text-white' onClick={() => setDeleteUser(d)}>Remove
            {/* onClick={() => deleteItem(bill._id)} */}
          </label>
          <UserDeleteModal d={d}> </UserDeleteModal>
        </td>
      </tr>
    </>
  );
};


export default EachUser;