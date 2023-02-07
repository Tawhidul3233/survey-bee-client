import React, { useState, useEffect } from 'react';


const BuyNow = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)

    }, [])


    return (
        <div className='sm:h-screen mb-8'>
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

                <div className='flex flex-col md:flex-row md:mx-64 mx-8 mt-10 '>
                    {/* <div>
                        <SelectCountry></SelectCountry>
                    </div> */}


                    <div className="form-control md:mx-16 ">
                        <label className="label">
                            <span className="label-text font-semibold">Billing Email</span>
                        </label>
                        <label className="input-group w-72 input-group-vertical">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </label>
                    </div>
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
        </div>
    );
};

export default BuyNow;


