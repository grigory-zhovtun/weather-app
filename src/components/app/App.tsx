import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Select } from '../select/Select';
import { Icon } from '../icon/Icon';
import { Count } from '../count/Count';
import { TimeDate } from '../time-date/TimeDate';
import { getWeather, getTimeAndDate } from '../../services/connector';
import { cities } from '../../cities_lat_lon';

const Wrapper = styled.div`
    display: grid;
    grid-template-column: repeat(3, 100px);
    justify-content: center;
    width: 324px;
    height: 700px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFF;
`;



export interface TimeAndDate {
    currentTime: string;
    currentDay: string;
    currentDate: string;
}

const App = () => {

    const citiesNames = cities.map(city => city.name).sort()
    const [city, setCity] = React.useState(citiesNames[0]);
    const [weather, setWeather] = React.useState(0);
    const [timeAndDate, setTimeAndDate] = React.useState<TimeAndDate>({
        currentTime: "",
        currentDay: "",
        currentDate: ""
    });

    const selectHandler = (newCity: string) => {
        setCity(newCity);
    }

    const kelvinToCelsius = (kelvin: number): number => {
        return kelvin - 273.15;
    }

    useEffect(() => {
        const getCityData = cities.filter(item => item.name === city)
        const data = getWeather(getCityData[0].lat, getCityData[0].lon)
            .then(res => {
                setWeather(Math.round(kelvinToCelsius(res.main.temp)))

                // calculate city date using timezone offset
                const date = new Date();
                const utcDate = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
                const cityDate = new Date(utcDate.getTime() + (res.timezone * 1000));

                // Get day of week using city's timezone
                const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const cityDay = daysOfWeek[cityDate.getUTCDay()];

                setTimeAndDate({
                    currentTime: cityDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    currentDay: cityDay,
                    currentDate: cityDate.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' })
                })
            })
    }, [city])


    return (
        <Wrapper>
            <Select getCIty={selectHandler} options={citiesNames} />
            <TimeDate cityData={timeAndDate} />
            <Icon />
            <Count weatherCount={weather} />
        </Wrapper>
    );
};

export default App;