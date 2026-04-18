import React, { use } from 'react';

const Countries = ({showCountries}) => {
    const countries = use(showCountries);
    console.log(countries.countries);
    return (
        <div>
            <h1>Get started with flag: {countries.countries.length}</h1>
        </div>
    );
};

export default Countries;