import React from 'react';
import { AppContext } from '../context/AppContext';


const WeatherCard = () => {
    return (
        <AppContext.Consumer>
        {({weatherData}) => {
            return (
            <div className="weather-card">
                <h2>Weather Card</h2>
                <div className="weather-card__content">
                <p>{weatherData}</p>
                </div>
            </div>
            )
        }}
        </AppContext.Consumer>
    )
    }   