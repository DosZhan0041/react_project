// CountryContainer.js
import React, { useState } from "react";
import Country from "./countryContainer/country";

const CountryContainer = ({ onChange }) => {
    const [selected, setSelected] = useState("Country");

    const handleSelect = (country) => {
        setSelected(country);
        onChange(country); 
    };

    return(
        <div className="countryContainer">
            <Country selected={selected} onSelect={handleSelect}/>
        </div>
    );
}

export default CountryContainer;
