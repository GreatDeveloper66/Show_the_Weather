import express from "express";
import getWeatherData from "../services/getWeatherData.js";

const weatherRouter = express.Router();

const statusMessageFromCoordinates = (latitude, longitude) => {
    if (latitude === undefined || longitude === undefined) {
        return "Invalid input";
    }
    
    const latNum = Number(latitude);
    const lonNum = Number(longitude);

    if (isNaN(latNum) || isNaN(lonNum)) {
        return "latitude and/or longitude must be numbers";
    } else if (latNum < -90 || latNum > 90 || lonNum < -180 || lonNum > 180) {
        return "latitude and/or longitude out of range";
    } else {
        return null;
    }
};

weatherRouter.get("/weather/:latitude/:longitude", async (req, res) => {
    const { latitude, longitude } = req.params;
    const statusMessage = statusMessageFromCoordinates(latitude, longitude);

    if (statusMessage) {
        res.status(400).send(statusMessage);
        return;
    }

    try {
        const weatherData = await getWeatherData(latitude, longitude);
        if (weatherData.error) {
            res.status(400).send(weatherData.error);
        } else {
            res.status(200).send(weatherData);
        }
    } catch (error) {
        res.status(500).send("Internal server error");
    }
});

export default weatherRouter;
