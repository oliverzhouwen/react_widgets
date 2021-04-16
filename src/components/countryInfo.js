import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CountryCard from './countryCard';

const CountryInfo = ({ country }) => {

    const [ result, setResult ] = useState('');
    // const [ currentCountry, newCountry ] = useState(country);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`);
            setResult(data);
        }
        getData();
        
    }, [country])
    console.log(result);

    return result ? <CountryCard name={result.name} region={result.region} population={result.population} capital={result.capital} flag={result.flag} language={result.languages[0].name} /> : null;
}

export default CountryInfo;