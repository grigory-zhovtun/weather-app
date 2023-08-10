import axios from "axios";
import { API_KEY } from "./credential";

export const getWeather = async (lat: number, lon: number) => {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTimeAndDate = async (cityName: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return {
      currentTime: date.toLocaleTimeString(),
      currentDay: daysOfWeek[date.getDay()],
      currentDate: date.toLocaleDateString(),
    };
}