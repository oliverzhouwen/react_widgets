import React, { useRef, useEffect, useState } from 'react'
import { Dropdown } from 'semantic-ui-react'
import CountryInfo from './countryInfo';
import '../style/countryDropdown.css'


const CountryDropdown = () => {

  const [ country, setCountry ] = useState(''); 

  const countryData = require('../data/country_data_json.json');
  const countries = countryData.map(data => {
    return ({key: data.Code.toLocaleLowerCase(), value: data.Code.toLocaleLowerCase(), flag: data.Code.toLocaleLowerCase(), text: data.Name });
  })

  const handleDropdown = (event, data) => {
    setCountry(data.value);
  }


  return (
    <div>
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countries}
        onChange={handleDropdown}
        id='countryDropdown'
      />
      {country ? <CountryInfo country={country}/> : null}
    </div>
  )
}

export default CountryDropdown