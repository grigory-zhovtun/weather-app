import React, { useState } from 'react';

interface SelectProps {
    options: string[];
    getCIty: (newCity: string) => void;
}

export const Select: React.FC<SelectProps> = ({ options, getCIty }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        getCIty(e.target.value);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};