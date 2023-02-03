import React from 'react';

const BuyNow = () => {
    return (
        <div className='sm:h-screen'>
            {/* <p className='my-10 md:ml-64 ml-10' >
                <img className='w-3/4 h-2/4 text-center ' src="https://t3.ftcdn.net/jpg/03/53/83/92/360_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg" alt="" />
            </p> */}

            <div className='flex flex-col md:flex-row md:mx-64 mx-8 '>
                <div className="form-control md:mx-16">
                    <label className="label">
                        <span className="label-text">First name</span>
                    </label>
                    <label className="input-group w-72 input-group-vertical">
                        <input type="text" placeholder="First name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:mx-16">
                    <label className="label">
                        <span className="label-text">Last name</span>
                    </label>
                    <label className="input-group w-72 input-group-vertical">
                        <input type="text" placeholder="Last name" className="input input-bordered" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;