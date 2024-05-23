import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';


const WeatherCard = () => {
    return (
        <AppContext.Consumer>
        {({weatherData}) => {
            return (
            <Card>
                <CardImg variant="top" src={weatherData.icon} />
                <CardBody>
                    <CardTitle>{weatherData.city}</CardTitle>
                    <CardText>{weatherData.description}</CardText>
                    <CardText>{weatherData.temp}°C</CardText>
                    <CardText>Low: {weatherData.low} </CardText>
                    <CardText>High: {weatherData.high} </CardText>
                </CardBody>   
            </Card>  
            )
        }}
        </AppContext.Consumer>
    )
    }   