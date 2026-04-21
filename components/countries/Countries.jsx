import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'
const Countries = ({showCountries}) => {
    const [visitedCoountryInfo,setvisitedCoountryInfo] = useState([])
    const handlerVisitedInfo = (countryInfo)=>{
        console.log(countryInfo.name.common);
        const newvisitedCoountryInfo = [...visitedCoountryInfo, countryInfo];
        setvisitedCoountryInfo(newvisitedCoountryInfo)
    }
    const background = ()=>{
        
        document.body.style.backgroundColor = "black"
    }
    const background2 = ()=>{
        
        document.body.style.backgroundColor = "lightgreen"
    }
    const countries = use(showCountries);
    // console.log(countries.countries);
    return (
        <div>
            <h2>Get started with flag: <br />{countries.countries.length}</h2><br />
            <h2>Visited Countries: {visitedCoountryInfo.length}</h2>
            <button onClick={()=>{background()}} className='btn'>background black</button>
            <button onClick={()=>{background2()}} className='btn'>background lightgreen</button>
            <ol>
            {
                visitedCoountryInfo.map(single => {
                   return <li key={single.cca3.cca3}>{single.name.common}</li>

                })
            
            }</ol>
            <div className='grid-countries'>
                {
                countries.countries.map(country => <Country country= {country} key={country.cca3.cca3} handlerVisitedInfo={handlerVisitedInfo}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;