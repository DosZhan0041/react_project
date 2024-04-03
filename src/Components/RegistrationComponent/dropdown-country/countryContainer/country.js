// Country.js
import React, { useState } from "react";
import "./country.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Country = ({ selected, onSelect }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ['Kazakhstan', 'Russia', 'USA', 'Turkey'];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
                {selected}
                <IoMdArrowDropdown />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => {
                                onSelect(option); 
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Country;
