import React from 'react';
import styled from 'styled-components';
import { TimeAndDate } from '../app/App';

type TimeDatePropsType = {
    cityData: TimeAndDate
}

const CurrentTime = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CurrentDay = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CurrentDate = styled.span`
    color: rgba(0, 0, 0, 0.50);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const TimeDate = ({cityData}: TimeDatePropsType) => {

    return (
        <div>
            <CurrentTime>{cityData.currentTime}</CurrentTime>
            <div>
                <CurrentDay>{cityData.currentDay}</CurrentDay>
                <CurrentDate>{cityData.currentDate}</CurrentDate>
            </div>
        </div>
    );
};
