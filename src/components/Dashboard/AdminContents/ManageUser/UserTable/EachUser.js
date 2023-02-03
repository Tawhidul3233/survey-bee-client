import React from 'react';

const EachUser = ({d}) => {
  return (
    <>
      <tr>
        <td> {d.id} </td>
        <td> {d.name} </td>
        <td> {d.email} </td>
        <td> {d.level} </td>
        <td> {d.role} </td>
        <td> {d.user} </td>
      </tr>
    </>
  );
};

export default EachUser;