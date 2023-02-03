import React from 'react';
import SelectCountry from './SelectCountry';

const BuyNow = () => {
    return (
        <div className='sm:h-screen '>
            <form action="">

                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-16'>
                    <div className="form-control md:mx-16">
                        <label className="label">
                            <span className="label-text font-semibold">First name</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" placeholder="First name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control md:mx-16">
                        <label className="label">
                            <span className="label-text font-semibold">Last name</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" placeholder="Last name" className="input input-bordered" />
                        </label>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-10'>
                    <div>
                        <SelectCountry></SelectCountry>
                    </div>


                    <div className="form-control md:mx-16 ">
                        <label className="label">
                            <span className="label-text font-semibold">Billing Email</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </label>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default BuyNow;