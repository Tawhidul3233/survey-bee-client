import React from 'react';
import { toast } from 'react-hot-toast';

const EachUser = ({ d }) => {

  const deleteItem = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/deleteuser/${id}`,
      {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success(`User ${d?.userName} successfully Deleted ` )
      })
      .catch(error => {
        console.log(error)
        toast.error('Somthing wrong try again')
      })
  }
  return (
    <>
      <tr>
        <td> {d?._id}    </td>
        <td> {d?.userName}  </td>
        <td> {d?.email} </td>
        <td> {d?.jobRole}  </td>
        <td> {d?.userType}  </td>
        <td >
          <label onClick={() => deleteItem(d?._id)} className='ml-2 btn btn-xs btn-outline bg-red-500 text-white' >Remove
          </label>
        </td>

      </tr>
    </>
  );
};


export default EachUser;