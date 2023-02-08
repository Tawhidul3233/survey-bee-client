import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BuyNow = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)

    }, [])

    return (
        <div className='sm:h-screen mb-8'>
            <div className='md:mx-80 mx-8  mt-16'>
                <h1 className='text-xl font-bold mb-6 '>Billing</h1>
                <hr className='font-bold text-xl md:mr-44 mr-12 border-black' />
            </div>
            <form action="">
                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-10'>
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
                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-10 '>
                    <div className="form-control md:mx-16 ">
                        <label className="label">
                            <span className="label-text font-semibold">Billing Email</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </label>
                    </div>
                    {/* Select country starts here */}
                    <div className="form-control md:mx-16 ">
                        <label className="label">
                            <span className="label-text font-semibold">Country</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <div className=''>
                                <div>
                                    <select
                                        className={' border  w-72 h-12'}
                                    >
                                        <option value="">Select a country</option>
                                        {
                                            countries.map((item) => {
                                                return (
                                                    <option key={item.country}>
                                                        {item.country}
                                                    </option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </form>

            <div className='mt-10 md:ml-80 mx-8'>
                <Link to=""> <button className="px-28 bg-green-600 hover:bg-green-800 py-2 mb-5 mt-6 text-lg font-semibold  rounded-xl sm:mt- text-gray-100">
                    Pay now
                </button></Link>
            </div>

        </div>
    );
};

export default BuyNow;


