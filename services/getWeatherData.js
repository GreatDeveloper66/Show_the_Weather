import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();
const apiKey = process.env.WEATHER_API_KEY;

const getWeatherData = async (latitude, longitude) => {
    try {
        const today = new Date();
        const timelineWeatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${apiKey}`;
        const response = await fetch(timelineWeatherAPI);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const weatherDataJSON = await response.json();
        const { temp, conditions, tempmax, tempmin } = weatherDataJSON.days[0];

        return { today, temperature: temp, conditions, high: tempmax, low: tempmin };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return { error: 'Failed to fetch weather data' };
    }
};

export default getWeatherData;

