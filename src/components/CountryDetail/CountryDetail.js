import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../Country/Country';

const CountryDetail = () => {
    const [loaded, setLoaded] = useState(false);
    const [country, setCountry] = useState([]);
    const countryName = useParams();
    const currentCountry = countryName.countryName;
    useEffect(() => {
        const url = `https://restcountries.com/v2/name/${currentCountry}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data);
            setLoaded(true);
        })
    }, []);

    return (
        <div>
            {
                loaded && <Country country={country[0]}></Country>
            }
        </div>
    );
};

export default CountryDetail;
