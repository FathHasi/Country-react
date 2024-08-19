

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map(country => (
          <li key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} style={{ width: '30px', height: '20px', marginRight: '10px' }} />
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
