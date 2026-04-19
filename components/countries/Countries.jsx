import React, { use } from 'react';
import Country from './Country/Country';
import './countries.css'
const Countries = ({showCountries}) => {
    const countries = use(showCountries);
    // console.log(countries.countries);
    return (
        <div>
            <h1>Get started with flag: {countries.countries.length}</h1>
            <div className='grid-countries'>
                {
                countries.countries.map(country => <Country country= {country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;