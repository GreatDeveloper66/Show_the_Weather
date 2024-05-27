import weather_conditions from '../json/weather_conditions.json';

const getWeatherIcon = (conditions) => {
  const weatherIcon = weather_conditions[conditions];
  return weatherIcon ? `/icons/${weatherIcon}` : '/icons/default-icon.svg';
};

export default getWeatherIcon;
