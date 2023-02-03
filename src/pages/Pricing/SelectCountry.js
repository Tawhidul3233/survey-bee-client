import React, { useState, useEffect } from 'react'

const SelectCountry = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const data = require('./CountryData.json')
        console.log(data)
        setCountries(data)

    }, [])

    return (
        <div className='grid  mt-14'>
            <div>
                <select
                    className={'w-96 border rounded-lg text-3xl '}
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
    )
}

export default SelectCountry
