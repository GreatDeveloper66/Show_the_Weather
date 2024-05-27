import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { AppContext } from '../context/AppContext';
import '../css/WeatherCard.css'; // Ensure you import the CSS file

const WeatherCard = () => {
  return (
    <AppContext.Consumer>
      {({ weatherData }) => {
        return (
          <Card className="weather-card">
            <CardImg
              variant="top"
              src={weatherData.icon}
              onError={(e) => { e.target.src = '/icons/default-icon.svg'; }}
            />
            <CardBody>
              <CardTitle>{weatherData.city}</CardTitle>
              <CardText>{weatherData.description}</CardText>
              <CardText>{weatherData.temp}°C</CardText>
              <CardText>Low: {weatherData.low}°C</CardText>
              <CardText>High: {weatherData.high}°C</CardText>
            </CardBody>
          </Card>
        );
      }}
    </AppContext.Consumer>
  );
};

export default WeatherCard;
