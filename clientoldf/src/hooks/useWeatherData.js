import { useState, useEffect, useContext } from 'react';
import getWeatherData from '../fetchServices/getWeatherDataService';
import getWeatherIcon from '../fetchServices/getWeatherIcon';
import { AppContext } from '../context/AppContext';

const useWeatherData = () => {
  const { setWeatherData } = useContext(AppContext);
  const [weatherData, setLocalWeatherData] = useState([]);

  const fetchAndUpdateWeatherData = async () => {
    try {
      const data = await getWeatherData();
      data.icon = getWeatherIcon(data.description);
      setLocalWeatherData(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  useEffect(() => {
    fetchAndUpdateWeatherData();
    const intervalId = setInterval(fetchAndUpdateWeatherData, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return weatherData;
};

export default useWeatherData;
