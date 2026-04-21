import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {
    // console.log(country.cca3.cca3);
    const [visited, setVisited]=useState(false);

    function handler(){
    
if (visited) {
    setVisited(false)
}else{
    setVisited(true)
}
}

    
    return (
        <div className={`border ${visited && `visited`}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital.capital}</p>
            <button className='btn' onClick={handler}>{visited ? "visited":"not visited" }</button>
        </div>
    );
};

export default Country;