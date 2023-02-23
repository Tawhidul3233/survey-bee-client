import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UserDeleteModal = ({ d }) => {
  // console.log(d._id)
  // Delete click Handler and delete bills

  const deleteItem = (id) => {
    fetch(`https://survey-bee-server.vercel.app/users/${id}`,
      {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success(`successfully Deleted ${d?.userName}` )
      })
      .catch(error => {
        console.log(error)
        toast.error('Somthing wrong try again')
      })
  }

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-1/4">
          <p className="font-bold  text-center"> Are you sure you want to delete? </p>
          <p className=' text-center'>{d?.userName}</p>
          <div className="modal-action justify-center">
            <label onClick={() => deleteItem(d._id)} htmlFor="delete-modal" className="btn btn-sm bg-red-600 text-white">Yes</label>
            <label htmlFor="delete-modal" className="btn btn-sm bg-black text-white">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeleteModal;