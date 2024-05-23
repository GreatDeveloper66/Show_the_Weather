import fetch from 'node-fetch';


const [latitude, longitude] = navigator.geolocation.getCurrentPosition(async function (position) {
    return [position.coords.latitude, position.coords.longitude];
});

const getWeatherData = async () => {
    return await fetch('/weather', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            latitude,
            longitude
        })
    }).then(response => {
        if(response.status === 404) {
            console.log("Weather data not found");
        } else if(response.status === 500) {
            console.log("Internal server error");
        } else if(response.status === 400) {
            console.log("Bad request");
        } else if(response.status === 200) {
            console.log(response.json());
        } else {
            console.log("Internal server error");
        }
    }).catch(error => {
        console.error('Error:', error);
    })
}
    
    

export default getWeatherData;

// fetch('/weather', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         latitude,
//         longitude
//     })
// }).then(response => {
//     if(response.status === 404) {
//         console.log("Weather data not found");
//     } else if(response.status === 500) {
//         console.log("Internal server error");
//     } else if(response.status === 400) {
//         console.log("Bad request");
//     } else if(response.status === 200) {
//         console.log(response.json());
//     } else {
//         console.log("Internal server error");
//     }
// }).catch(error => {
//     console.error('Error:', error);
// })

