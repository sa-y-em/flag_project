import React from 'react';
import './country.css'

const Country = ({country}) => {
    console.log(country.capital.capital);
    return (
        <div className='border'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital.capital}</p>
        </div>
    );
};

export default Country;