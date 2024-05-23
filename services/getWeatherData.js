import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';
const apiKey = process.env.WEATHER_API_KEY;

const getWeatherData = async (latitude, longitude) => {
    const today = new Date();
    const timelineWeatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${apiKey}`;
    const weatherData = await fetch(timelineWeatherAPI);
    console.log("weatherData: " + weatherData);
    const weatherDataJSON = await weatherData.json();
    const temperature = weatherDataJSON.days[0].temp;
    const conditions = weatherDataJSON.days[0].conditions;
    const high = weatherDataJSON.days[0].tempmax;
    const low = weatherDataJSON.days[0].tempmin;
    const weatherConditions = { today, temperature, conditions, high, low };
    return weatherConditions;
}

export default getWeatherData;

// const getWeatherData = async () => {
//     const today = new Date();
//     if (navigator.geolocation) {
//         const location = navigator.geolocation.getCurrentPosition(async function (position) {
//             const [latitude, longitude] = [position.coords.latitude, position.coords.longitude];
//             return `${latitude},${longitude}`;
//         });
        
    
//             const timelineWeatherAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;
//             const weatherData = await fetch(timelineWeatherAPI);
//             const weatherDataJSON = await weatherData.json();
//             const temperature = weatherDataJSON.days[0].temp;
//             const conditions = weatherDataJSON.days[0].conditions;
//             const high = weatherDataJSON.days[0].tempmax;
//             const low = weatherDataJSON.days[0].tempmin;
//             const weatherConditions = { today, temperature, conditions, high, low };
//             return weatherConditions;
    
//     } else {
//         return "Geolocation is not supported by this browser.";
//     }
// }


// export default getWeatherData;

// // navigator.geolocation.getCurrentPosition(function(position) {
// //     console.log("Latitude is :", position.coords.latitude);
// //     console.log("Longitude is :", position.coords.longitude);
// //   });

// //set up weather api to get current weather conditions
// //const timelineWeatherAPITemplate = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${apiKey}`;