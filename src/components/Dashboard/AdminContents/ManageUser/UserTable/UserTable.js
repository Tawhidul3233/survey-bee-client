import React from 'react';

const UserTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">

        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Billing Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default UserTable;