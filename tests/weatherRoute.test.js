import { strict as assert } from 'assert';
import express from 'express';
import request from 'supertest';
import weatherRouter from '../routes/weather_router.js';

const app = express();
app.use(express.json());
app.use('/api', weatherRouter);

describe('GET /api/weather', () => {
    it('should return 400 for missing latitude and longitude', async () => {
        const response = await request(app).get('/api/weather');
        assert.equal(response.status, 400);
        assert.equal(response.text, "Invalid input");
    });

    it('should return 400 for invalid latitude and longitude', async () => {
        const response = await request(app).get('/api/weather?latitude=invalid&longitude=invalid');
        assert.equal(response.status, 400);
        assert.equal(response.text, "latitude and/or longitude must be numbers");
    });

    it('should return 400 for out of range latitude and longitude', async () => {
        const response = await request(app).get('/api/weather?latitude=100&longitude=200');
        assert.equal(response.status, 400);
        assert.equal(response.text, "latitude and/or longitude out of range");
    });

    it('should return 200 and weather data for valid latitude and longitude', async () => {
        const response = await request(app).get('/api/weather?latitude=32.7649&longitude=-97.0657');
        assert.equal(response.status, 200);
        assert(response.body);
        assert(response.body.temperature);
        assert(response.body.conditions);
        assert(response.body.high);
        assert(response.body.low);
    });

    it('should return 500 for internal server error (simulate by passing incorrect key)', async () => {
        // Here you may need to mock the `getWeatherData` to simulate an internal error.
        const originalGetWeatherData = getWeatherData;
        getWeatherData = async () => { throw new Error('Simulated internal error'); };

        const response = await request(app).get('/api/weather?latitude=32.7649&longitude=-97.0657');
        assert.equal(response.status, 500);
        assert.equal(response.text, "Internal server error");

        getWeatherData = originalGetWeatherData; // Restore the original function
    });
});
