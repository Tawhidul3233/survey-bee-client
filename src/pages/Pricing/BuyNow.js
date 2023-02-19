import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../../features/userSlice';


const BuyNow = () => {

    const activeUser = useSelector(user);
    console.log(activeUser);
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)

    }, [])


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        // Handle button click here
    };


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
                            <input required type="text" disabled defaultValue={activeUser?.user?.displayName.split(" ")[0]} placeholder="First name" className="input input-bordered" />

                        </label>
                    </div>
                    <div className="form-control md:mx-16">
                        <label className="label">
                            <span className="label-text font-semibold">Last name</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" disabled defaultValue={activeUser?.user?.displayName.split(" ")[1]} placeholder="Last name" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-10 '>
                    <div className="form-control md:mx-16 ">
                        <label className="label">
                            <span className="label-text font-semibold">Billing Email</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" defaultValue={activeUser?.user?.email} disabled placeholder="Email" className="input input-bordered" />
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
                                        value={selectedOption} onChange={handleSelectChange}

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
                        {!selectedOption && <p className="text-red-500 mt-2">Please select a country.</p>}
                    </div>
                </div>
            </form>

            <div className='mt-10 md:ml-80 mx-8'>
                <Link to="/paynow"> <button
                    onClick={handleButtonClick} disabled={!selectedOption}
                    className={`px-28 py-2 mb-5 mt-6 text-lg font-semibold  rounded-xl ${!selectedOption ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-800 text-gray-100'}`}
                >
                    Pay now
                </button></Link>
            </div>

        </div>
    );
};

export default BuyNow;


