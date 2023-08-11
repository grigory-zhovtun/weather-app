import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Select } from '../select/Select';
import { Icon } from '../icon/Icon';
import { Count } from '../count/Count';
import { TimeDate } from '../time-date/TimeDate';
import { getWeather, getTimeAndDate } from '../../services/connector';

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

interface City {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

export const cities: City[] = [
    { name: "Paris", lat: 48.8566, lon: 2.3522, country: "France" },
    { name: "Venice", lat: 45.4408, lon: 12.3155, country: "Italy" },
    { name: "Barcelona", lat: 41.3851, lon: 2.1734, country: "Spain" },
    { name: "San Francisco", lat: 37.7749, lon: -122.4194, country: "USA" },
    { name: "Sydney", lat: -33.8688, lon: 151.2093, country: "Australia" },
    { name: "Rome", lat: 41.9028, lon: 12.4964, country: "Italy" },
    { name: "Cape Town", lat: -33.9249, lon: 18.4241, country: "South Africa" },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, country: "Brazil" },
    { name: "New York", lat: 40.7128, lon: -74.0060, country: "USA" },
    { name: "London", lat: 51.5074, lon: -0.1278, country: "UK" },
    { name: "Berlin", lat: 52.5200, lon: 13.4050, country: "Germany" },
    { name: "Amsterdam", lat: 52.3667, lon: 4.8945, country: "Netherlands" },
    { name: "Madrid", lat: 40.4168, lon: -3.7038, country: "Spain" },
    { name: "Lisbon", lat: 38.7223, lon: -9.1393, country: "Portugal" },
    { name: "Vienna", lat: 48.2082, lon: 16.3738, country: "Austria" },
    { name: "Prague", lat: 50.0755, lon: 14.4378, country: "Czech Republic" },
    { name: "Brussels", lat: 50.8503, lon: 4.3517, country: "Belgium" },
    { name: "Budapest", lat: 47.4979, lon: 19.0402, country: "Hungary" },
    { name: "Stockholm", lat: 59.3293, lon: 18.0686, country: "Sweden" },
    { name: "Copenhagen", lat: 55.6761, lon: 12.5683, country: "Denmark" },
    { name: "Dublin", lat: 53.3498, lon: -6.2603, country: "Ireland" },
    { name: "Edinburgh", lat: 55.9533, lon: -3.1883, country: "Scotland" },
    { name: "Oslo", lat: 59.9139, lon: 10.7522, country: "Norway" },
    { name: "Helsinki", lat: 60.1699, lon: 24.9384, country: "Finland" },
    { name: "Warsaw", lat: 52.2297, lon: 21.0122, country: "Poland" },
    { name: "Zurich", lat: 47.3769, lon: 8.5417, country: "Switzerland" },
    { name: "Athens", lat: 37.9838, lon: 23.7275, country: "Greece" },
    { name: "Moscow", lat: 55.7558, lon: 37.6173, country: "Russia" },
    { name: "Saint Petersburg", lat: 59.9343, lon: 30.3351, country: "Russia" },
    { name: "Istanbul", lat: 41.0082, lon: 28.9784, country: "Turkey" },
    { name: "Ankara", lat: 39.9334, lon: 32.8597, country: "Turkey" },
    { name: "Beijing", lat: 39.9042, lon: 116.4074, country: "China" },
    { name: "Shanghai", lat: 31.2304, lon: 121.4737, country: "China" },
    { name: "Tokyo", lat: 35.6762, lon: 139.6503, country: "Japan" },
    { name: "Seoul", lat: 37.5665, lon: 126.9780, country: "South Korea" },
    { name: "Bangkok", lat: 13.7563, lon: 100.5018, country: "Thailand" },
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, country: "Malaysia" },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, country: "Singapore" },
    { name: "Jakarta", lat: -6.2088, lon: 106.8456, country: "Indonesia" },
    { name: "Manila", lat: 14., lon: -120., country: "Philippines" },
    { name: "Ho Chi Minh City", lat: -10., lon: -106., country: "Vietnam" },
    { name: "Taipei", lat: -25., lon: -121., country: "Taiwan" },
    { name: "Hong Kong", lat: -22., lon: -114., country: "Hong Kong" },
    { name: "Mumbai", lat: -19., lon: -72., country: "India" },
    { name: "Delhi", lat: -28., lon: -77., country: "India" },
    { name: "Dubai", lat: -25., lon: -55., country: "United Arab Emirates" },
    { name: "Doha", lat: -25., lon: -51., country: "Qatar" },
    { name: "Riyadh", lat: -24., lon: -46., country: "Saudi Arabia" },
    { name: "Cairo", lat: -30., lon: -31., country: "Egypt" },
    { name: "Tunis", lat: -36., lon: -10., country: "Tunisia" },
    { name: "Casablanca", lat: -33., lon: -7., country: "Morocco" },
    { name: "Lagos", lat: -6., lon: -3., country: "Nigeria" },
    { name: "Nairobi", lat: -1., lon: -36., country: "Kenya" },
    { name: "Johannesburg", lat: -26., lon: -28., country: "South Africa" },
    { name: "Mexico City", lat: -19., lon: -99., country: "Mexico" },
    { name: "Buenos Aires", lat: -34., lon: -58., country: "Argentina" },
    { name: "Sao Paulo", lat: -23., lon: -46., country: "Brazil" },
    { name: "Lima", lat: -12., lon: -77., country: "Peru" },
    { name: "Bogota", lat: -4., lon: -74., country: "Colombia" },
    { name: "Santiago", lat: -33., lon: -70., country: "Chile" }
];

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