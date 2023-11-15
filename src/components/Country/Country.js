import React from 'react';

const Country = (props) => {
    const {name, capital, region, population} = props.country;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;