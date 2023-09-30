import React, { useState, useEffect } from "react";

export default function CountrySelect(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of all countries from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Extract the names of the countries from the data
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountrySelection = (e) => {
    const selectedCountry = e.target.value;
    // Call the callback function to update the selectedCountry in the Form component
    props.onCountryChange(selectedCountry);
  };
  
  return (
    <>
      <label className={`${props.style2}`}>Select a country:</label>
      <select
      required
        className={`${props.style === '' ? 'rounded border-2 border-gray-200 w-full py-1' : props.style } `}
        onChange={handleCountrySelection}
        value={props.selectedCountry} // Use the selectedCountry prop passed from the Form component
      >
        <option >Select a country</option>
        {countries.map((countryName, index) => (
          <option key={index} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>
      <label className={`${props.style2} flex cursor-pointer items-center`}>
        <input className="rounded-lg mr-2" type="checkbox" />
        We accept remote candidates
      </label>
    </>
  );
}
