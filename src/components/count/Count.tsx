import React from 'react';
import styled from 'styled-components';

type CountProps = {
    weatherCount: number
}

const WeatherCount = styled.div`

    text-align: center;
    color: #000;
    font-family: Inter;
    font-size: 78px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Count = ({weatherCount}: CountProps) => {
    return (

            <WeatherCount>{weatherCount}°C</WeatherCount>
     
    );
};
