import React, { useState } from 'react';
import styled from 'styled-components';

interface SelectProps {
    options: string[];
    getCIty: (newCity: string) => void;
}

const StyledSelect = styled.select`
    width: 261px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FFF;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Arrow = styled.svg`
    width: 20px;
    height: 13px;
    flex-shrink: 0;
`;

export const Select: React.FC<SelectProps> = ({ options, getCIty }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        getCIty(e.target.value);
    };

    return (
        <div>
            <StyledSelect value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </StyledSelect>
            {/* <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 15" fill="none">
                <line x1="1.06066" y1="1.93934" x2="12.0607" y2="12.9393" stroke="black" stroke-width="3" stroke-linejoin="round"/>
                <line x1="21.0607" y1="2.06066" x2="10.0607" y2="13.0607" stroke="black" stroke-width="3" stroke-linejoin="round"/>
            </Arrow> */}
        </div>
    );
};
