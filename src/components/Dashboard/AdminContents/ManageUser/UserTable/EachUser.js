import React from 'react';

const EachUser = ({ d }) => {
  // console.log(d)
  return (
    <>
      <tr>
        <td> {d._id}    </td>
        <td> {d.userName}  </td>
        <td> {d.email} </td>
        <td> {d.jobRole}  </td>
        <td> {d.userType}  </td>
        <td >
          <button className='btn btn-xs bg-red-600 text-white border-none text-[10px]'> Remove </button>
        </td>
      </tr>
    </>
  );
};

export default EachUser;