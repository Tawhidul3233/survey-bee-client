import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UserDeleteModal = ({ _id, userName }) => {
// console.log(_id, userName)
  const deleteItem = (id) => {
    console.log(id)
    fetch(`https://power-hack-server-green.vercel.app/api/delete-billing/${id}`,
      {
        method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('Bill successfully Deleted')
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
          <p className="font-bold text-center">Are you sure you want to delete?</p>
          <p> {userName} </p>
          <div className="modal-action justify-center">
            <label onClick={() => deleteItem(_id)} htmlFor="delete-modal" className="btn bg-red-500">Yes</label>
            <label htmlFor="delete-modal" className="btn">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UserDeleteModal;