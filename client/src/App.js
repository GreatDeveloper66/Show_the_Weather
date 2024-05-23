import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import getWeatherData from './fetchServices/getWeatherDataService';
import { AppContext } from './context/AppContext';

function App() {
  const[weatherData, setWeatherData] = useState([]);

  const fetchAndUpdateWeatherData = async () => {
    try {
      const data = await getWeatherData();
      setWeatherData(data);
    } catch(error) {
      console.error("Error fetching weather data: ", error);  
    }
  }

  const fetchPeriodically = () => {
    setInterval(() => {
      fetchAndUpdateWeatherData();
    }, 10*60*1000);

}

useEffect(() => {
  fetchAndUpdateWeatherData();
  fetchPeriodically();
  return () => {
    clearInterval(fetchPeriodically);
  }
},[]);
  return (
    <AppContext.Provider value={{weatherData, setWeatherData}}>
      <div className="App">
        <WeatherCard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
