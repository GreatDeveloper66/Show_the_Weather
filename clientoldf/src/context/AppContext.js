import React from 'react';

const AppContext = React.createContext({
  weatherData: {
    city: 'City',
    description: 'Description',
    temp: 'Temp',
    low: 'Low',
    high: 'High',
    icon: 'Icon',
  },
  setWeatherData: () => {},
});

export { AppContext };
