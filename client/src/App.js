import React from 'react';
import WeatherCard from './components/WeatherCard';
import { AppContext } from './context/AppContext';
import useWeatherData from './hooks/useWeatherData';

function App() {
  const [weatherData, setWeatherData] = React.useState({
    city: 'City',
    description: 'Description',
    temp: 'Temp',
    low: 'Low',
    high: 'High',
    icon: 'Icon',
  });

  useWeatherData();

  return (
    <AppContext.Provider value={{ weatherData, setWeatherData }}>
      <div className="App">
        <WeatherCard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
