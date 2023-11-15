import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => {
            setCountries(data);
            setLoading(false);
        })
    }, []);

if (loading) return <h1>Loading</h1>;

    return (
        <div>
            {
                countries.map(country => <SingleCountry country={country}></SingleCountry>)
            }
        </div>
    );
};

export default Home;