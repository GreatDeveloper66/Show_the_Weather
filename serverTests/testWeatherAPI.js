import getWeatherData from "../getWeatherData";


describe('getWeatherData', () => {
    it('should return weather data', async () => {
        const weatherData = await getWeatherData();
        expect(weatherData).toHaveProperty('today');
        expect(weatherData).toHaveProperty('temperature');
        expect(weatherData).toHaveProperty('conditions');
        expect(weatherData).toHaveProperty('high');
        expect(weatherData).toHaveProperty('low');
    });
});

// This test will fail because the navigator object is not available in the Node.js environment.
// To fix this, we need to mock the navigator object in the test environment.
// We can do this by using a library like jsdom or by creating a custom mock for the navigator object.
// Here's an example of how you can mock the navigator object in the test:
//
