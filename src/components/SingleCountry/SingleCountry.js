import React from 'react';
import {
    Link
  } from "react-router-dom";

const SingleCountry = (props) => {
    const countryName = props.country.name;
    const capital = props.country.capital;
    
    return (
        <div>
            <h1>Country Name: {countryName} </h1>
            <h4>Capital: {capital} </h4>
            <Link to ={'/'+countryName}>
                <button>Show Detail</button>
            </Link>
        </div>
    );
};

export default SingleCountry;