import React from 'react';
import { TimeAndDate } from '../app/App';

type TimeDatePropsType = {
    cityData: TimeAndDate
}

export const TimeDate = ({cityData}: TimeDatePropsType) => {

    return (
        <div>
            <div>{cityData.currentTime}</div>
            <div><span>{cityData.currentDay}</span><span>{cityData.currentDate}</span></div>
        </div>
    );
};