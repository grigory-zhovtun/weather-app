import React from 'react';
import styled from 'styled-components';
import { TimeAndDate } from '../app/App';

type TimeDatePropsType = {
    cityData: TimeAndDate
}

const CurrentTime = styled.div`
    text-align: center;
    color: #000;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CurrentDay = styled.span`
    text-align: center;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CurrentDate = styled.span`
    text-align: center;
    color: rgba(0, 0, 0, 0.50);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Wrapper = styled.div`
    margin-top: 13px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
`

export const TimeDate = ({cityData}: TimeDatePropsType) => {

    return (
        <div>
            <CurrentTime>{cityData.currentTime}</CurrentTime>
            <Wrapper>
                <CurrentDay>{cityData.currentDay}</CurrentDay>
                <CurrentDate>{cityData.currentDate}</CurrentDate>
            </Wrapper>
        </div>
    );
};
