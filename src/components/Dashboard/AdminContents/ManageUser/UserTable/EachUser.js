import React from 'react';

const EachUser = ({d}) => {
  return (
    <>
      <tr>
        <td> {d.id} </td>
        <td> {d.name} </td>
        <td> {d.email} </td>
        <td> {d.role} </td>
        <td> {d.user} </td>
        <td >
          <button className='btn btn-xs bg-red-600 text-white border-none text-[10px]'> Remove </button>
          
        </td>
      </tr>
    </>
  );
};

export default EachUser;