import express from "express";
import getWeatherData from "../services/getWeatherData.js";
const weatherRouter = express.Router();

/* This code snippet defines a route handler for GET requests to "/weather/:latitude/:longitude"
endpoint in an Express application. Here's a breakdown of what the code does: */
weatherRouter.get("/weather/:latitude/:longitude", async (req, res) => {
    const { latitude, longitude } = req.params;
    console.log("latitude: " + latitude + " longitude: " + longitude);
    if(latitude === undefined || longitude === undefined) {
        res.status(400).send("Invalid input");
    } else if(latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        res.status(400).send("latitude and/or longitude out of range");
    } else if(isNaN(latitude) || isNaN(longitude)) {
        res.status(400).send("latitude and/or longitude must be numbers");
    } else if(latitude === "" || longitude === "") {
        res.status(400).send("latitude and/or longitude must not be empty");
    } else if(latitude.includes("e") || latitude.includes("E") || longitude.includes("e") || longitude.includes("E")) {
        res.status(400).send("latitude and/or longitude must not contain 'e' or 'E'");
    } else if(latitude.includes(" ") || longitude.includes(" ")) {
        res.status(400).send("latitude and/or longitude must not contain spaces");
    } else if(latitude.includes(".") && latitude.split(".")[1].length > 6) {
        res.status(400).send("latitude must have at most 6 decimal places");
    } else if(longitude.includes(".") && longitude.split(".")[1].length > 6) {
        res.status(400).send("longitude must have at most 6 decimal places");
    } else if(longitude === NULL || latitude === NULL) {
        res.status(400).send("latitude and/or longitude must not be null");
    }  else {
        const weatherData = await getWeatherData(latitude, longitude);
    if(weatherData === null) {
        res.status(404).send("Weather data not found");
    } else if(weatherData === undefined) {
        res.status(500).send("Internal server error");
    } else if(weatherData.error) {
        res.status(400).send(weatherData.error);
    } else if(weatherData.data) {
        res.status(200).send(weatherData.data);
    } else {
        res.status(500).send("Internal server error");
    }
    }

    
});

export default weatherRouter;

// weatherRouter.get("/weather/:latitude/:longitude", async (req, res) => {
//     const { latitude, longitude } = req.params;
//     console.log("latitude: " + latitude + " longitude: " + longitude);
//     const weatherData = await getWeatherData(latitude, longitude);
//     if(weatherData === null) {
//         res.status(404).send("Weather data not found");
//     } else if(weatherData === undefined) {
//         res.status(500).send("Internal server error");
//     } else if(weatherData.error) {
//         res.status(400).send(weatherData.error);
//     } else if(weatherData.data) {
//         res.status(200).send(weatherData.data);
//     } else {
//         res.status(500).send("Internal server error");
//     }
// });
