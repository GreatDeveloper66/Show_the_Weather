//global weather data variables
var apikey;
var lat;
var long;
var api;
var tempFarenheit;
var tempCelsius;
var apparentTempFarenheit;
var apparentTempCelsius;
var pressure;
var humidity;
var chanceofPrecipitation;
var precipType;
var condition;
var windSpeed;
var weekTemp;
var celsiusOn = false;
var googleapiKey;
var addressRequest;
var City;
var State;
var weatherSummary;

//links to wether icons
var weather_icon;
var weather_icon_html;
var Cloudy_1 =
  "https://www.dropbox.com/s/ri2bbiec2r7dy3z/cloudy-day-1.svg?raw=1";
var Cloudy_2 =
  "https://www.dropbox.com/s/joikg57y5rmdnuu/cloudy-day-2.svg?raw=1";
var Cloudy_3 =
  "https://www.dropbox.com/s/06vlxmsj99ixzst/cloudy-day-3.svg?raw=1";
var Cloudy_Night_1 =
  "https://www.dropbox.com/s/dnp3dt0ohpgc1mu/cloudy-night-1.svg?raw=1";
var Cloudy_Night_2 =
  "https://www.dropbox.com/s/0ey373wc7rz9n9l/cloudy-night-2.svg?raw=1?";
var Cloudy_Night_3 =
  "https://www.dropbox.com/s/yb6pdn6fso09u9b/cloudy-night-3.svg?raw=1";
var Cloudy = "https://www.dropbox.com/s/xfi74v97kiyhflu/cloudy.svg?raw=1";
var Day_Time = "https://www.dropbox.com/s/ep26vq96nub1h4z/day.svg?raw=1";
var Night_Time = "https://www.dropbox.com/s/z43t9xwd68gfgqn/night.svg?raw=1";
var Rainy_1 = "https://www.dropbox.com/s/xmjg3cz4p98fiyu/rainy-1.svg?raw=1";
var Rainy_2 = "https://www.dropbox.com/s/cvzqvx6znbg397n/rainy-2.svg?raw=1";
var Rainy_3 = "https://www.dropbox.com/s/292ok480bbqeybz/rainy-3.svg?raw=1";
var Rainy_4 = "https://www.dropbox.com/s/avr37ke4qz9gwqn/rainy-4.svg?raw=1";
var Rainy_5 = "https://www.dropbox.com/s/bt2gackk5pcidxw/rainy-5.svg?raw=1";
var Rainy_6 = "https://www.dropbox.com/s/6wh3fqpuf3yjrjm/rainy-6.svg?raw=1";
var Rainy_7 = "https://www.dropbox.com/s/ju1p6r74pz5z6f4/rainy-7.svg?raw=1";
var Snowy_1 = "https://www.dropbox.com/s/9ibh0o9ulsp0t66/snowy-1.svg?raw=1";
var Snowy_2 = "https://www.dropbox.com/s/lvijrxel3haad69/snowy-2.svg?raw=1";
var Snowy_3 = "https://www.dropbox.com/s/efl2j93hb8zfok2/snowy-3.svg?raw=1";
var Snowy_4 = "https://www.dropbox.com/s/wcxy9oujktc5t2w/snowy-4.svg?raw=1";
var Snowy_5 = "https://www.dropbox.com/s/ltw13etpa4d3jtd/snowy-5.svg?raw=1";
var Snowy_6 = "https://www.dropbox.com/s/p28mrxdurelpkl4/snowy-6.svg?raw=1";
var Thunder = "https://www.dropbox.com/s/50xncjl5tq4jg9x/thunder.svg?raw=1";
var Weather_Sunset =
  "https://www.dropbox.com/s/2cd5iifkzn7wh8q/weather_sunset.svg?raw=1";
var Generic = "https://www.dropbox.com/s/kgs634yu0edkgpe/weather.svg?raw=1";


//Choose icon based on weather conditions
var weatherIcons = {
  "clear-day":  "https://www.dropbox.com/s/ep26vq96nub1h4z/day.svg?raw=1",
  "clear-night": "https://www.dropbox.com/s/z43t9xwd68gfgqn/night.svg?raw=1",
  "rain": "https://www.dropbox.com/s/cvzqvx6znbg397n/rainy-2.svg?raw=1",
  "snow": "https://www.dropbox.com/s/lvijrxel3haad69/snowy-2.svg?raw=1",
  "sleet": "https://www.dropbox.com/s/292ok480bbqeybz/rainy-3.svg?raw=1",
  "fog":  "https://www.dropbox.com/s/joikg57y5rmdnuu/cloudy-day-2.svg?raw=1",
  "cloudy": "https://www.dropbox.com/s/xfi74v97kiyhflu/cloudy.svg?raw=1",
  "partly-cloudy-day": "https://www.dropbox.com/s/ri2bbiec2r7dy3z/cloudy-day-1.svg?raw=1",
  "partly-cloudy-night": "https://www.dropbox.com/s/0ey373wc7rz9n9l/cloudy-night-2.svg?raw=1",       
  "wind": "https://www.dropbox.com/s/hq7ilwcyewy1hdi/Wind.svg?raw=1"
  };

var forecast = [
  { currentTempF: 0, currentTempC: 0, icon: ""},
  {
    sunrise: 0,
    sunset: 0,
    precipChance: 0,
    precipType: 0,
    tempHighF: 0,
    tempHighC: 0,
    tempLowF: 0,
    tempLowC: 0,
    icon: ""
  },
  {
    sunrise: 0,
    sunset: 0,
    precipChance: 0,
    precipType: 0,
    tempHighF: 0,
    tempHighC: 0,
    tempLowF: 0,
    tempLowC: 0,
    icon: ""
  },
  {
    sunrise: 0,
    sunset: 0,
    precipChance: 0,
    precipType: 0,
    tempHighF: 0,
    tempHighC: 0,
    tempLowF: 0,
    tempLowC: 0,
    icon: ""
  }
];


var daysoftheWeek = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN",
  "MON"
];
var todaysDay = new Date().getDay();
var Today = daysoftheWeek[todaysDay];
var Tommorow = daysoftheWeek[todaysDay + 1];
var afterTommorow = daysoftheWeek[todaysDay + 2];


$(document).ready(function() {
  //first get location information
  //make a call to freeoip
  //create Coordinates

  //set current days
  $("#today").text(Today);
  $("#tommorow").text(Tommorow);
  $("#aftertommorow").text(afterTommorow);

  var getAddress = function() {
    googleapiKey = "AIzaSyAVR59dUnHvLmDmZblV4qBwDcZdHN0QcXg";
    addressRequest =
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      lat +
      "," +
      long +
      "&key=" +
      googleapiKey;

    $.ajax({
      url: addressRequest,
      error: function() {
        $("#CityState").html("Google Api didn't work");
      },
      success: function(data) {
        City = data.results[0].address_components[2].long_name;
        State = data.results[0].address_components[5].short_name;
        $("#CityState").html(City + ", " + State);
      }
    });
  };

  var getWeather = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherData);
    } else {
      $("#CityState").html("Geolocation is not supported by this browser.");
    }
  };

  var getWeatherData = function(position) {
    apikey = "3664a9b99ec74bd5365fbc7a9cf34371";
    lat = Math.round(position.coords.latitude);
    long = Math.round(position.coords.longitude);

    getAddress();

    api = "https://api.forecast.io/forecast/" + apikey + "/" + lat + "," + long;
    $.ajax({
      url: api,
      jsonp: "callback",
      dataType: "jsonp",
      error: function() {
        $("#temperature").html("Call didn't work");
      },
      success: function(data) {
        //the following variables are declare outside any function and should thus be global
        tempFarenheit = Math.round(data.currently.temperature);
        tempCelsius = Math.round(5 / 9 * (data.currently.temperature - 32));
        apparentTempFarenheit = Math.round(data.currently.apparentTemperature);
        apparentTempCelsius = Math.round(5 / 9 * (apparentTempFarenheit - 32));
        pressure = Math.round(data.currently.pressure);
        humidity = data.currently.humidity;
        chanceofPrecipitation = data.currently.precipProbability;
        precipType = data.currently.precipType;
        condition = data.currently.icon;
        windSpeed = data.currently.windSpeed;

        forecast[0].currentTempF = Math.round(data.currently.temperature);
        forecast[0].currentTempC = Math.round(5 / 9 * (data.currently.temperature - 32));

        forecast[1].sunrise = data.daily.data[0].sunriseTime;
        forecast[2].sunrise = data.daily.data[1].sunriseTime;
        forecast[3].sunrise = data.daily.data[2].sunriseTime;
        forecast[1].sunset = data.daily.data[0].sunsetTime;
        forecast[2].sunset = data.daily.data[1].sunsetTime;
        forecast[3].sunset = data.daily.data[2].sunsetTime;
        forecast[1].precipChance = data.daily.data[0].precipProbability;
        forecast[2].precipChance = data.daily.data[1].precipProbability;
        forecast[3].precipChance = data.daily.data[2].precipProbability;
        forecast[1].precipType = data.daily.data[0].precipType;
        forecast[2].precipType = data.daily.data[1].precipType;
        forecast[3].precipType = data.daily.data[2].precipType;

        forecast[1].tempHighF = Math.round(data.daily.data[0].temperatureHigh);
        forecast[1].tempHighC = Math.round((5/9*(data.daily.data[0].temperatureHigh-32)));
        forecast[1].tempLowF = Math.round(data.daily.data[0].temperatureLow);
        forecast[1].tempLowC = Math.round((5/9*(data.daily.data[0].temperatureLow-32)));

        forecast[2].tempHighF = Math.round(data.daily.data[1].temperatureHigh);
        forecast[2].tempHighC = Math.round((5/9*(data.daily.data[1].temperatureHigh-32)));
        forecast[2].tempLowF = Math.round(data.daily.data[1].temperatureLow);
        forecast[2].tempLowC = Math.round((5/9*(data.daily.data[1].temperatureLow-32)));

        forecast[3].tempHighF = Math.round(data.daily.data[2].temperatureHigh);
        forecast[3].tempHighC = Math.round((5/9*(data.daily.data[2].temperatureHigh-32)));
        forecast[3].tempLowF = Math.round(data.daily.data[2].temperatureLow);
        forecast[3].tempLowC = Math.round((5/9*(data.daily.data[2].temperatureLow-32)));

        forecast[1].icon = weatherIcons[data.daily.data[0].icon];
        alert(data.daily.data[0].icon);
        forecast[2].icon = weatherIcons[data.daily.data[1].icon];
        forecast[3].icon = weatherIcons[data.daily.data[2].icon];



        $("#temperature").html(
          '<i class="fa fa-thermometer-full" aria-hidden="true"></i>' +
            " " +
            forecast[0].currentTempF +
            " &deg;F"
        );

        $("#coordinates").html(
           '<h2><i class="fa fa-globe" aria-hidden="true"></i>' + ' ' + lat + '&deg; N' + long + '&deg; W</h2>');

        $("#todaytemps").html("<p>" + forecast[1].tempLowF + "&degF/" + forecast[1].tempHighF + "&degF</p>");
        $("#tommorowtemps").html("<p>" + forecast[2].tempLowF + "&degF/" + forecast[2].tempHighF + "&degF</p>");
        $("#dayaftertemps").html("<p>"+ forecast[3].tempLowF + "&degF/" + forecast[3].tempHighF + "&degF</p>");

        $("#todayicon").html("<img src='" + forecast[1].icon + "'/>");
        $("#tommorowicon").html("<img src='" + forecast[2].icon + "'/>");
        $("#dayaftericon").html("<img src='" + forecast[3].icon + "'/>");
        
        

        

        switch (condition) {
          case "clear-day":
            weather_icon = Day_Time;
            weatherSummary = "Clear Day";
            break;
          case "clear-night":
            weather_icon = Night_Time;
            weatherSummary = "Clear Night";
            break;
          case "rain":
            weather_icon = Rainy_2;
            weatherSummary = chanceofPrecipitation + "% chance of Rain";
            break;
          case "snow":
            weather_icon = Snowy_2;
            weatherSummary = chanceofPrecipitation + "% chance of SnowFall";
            break;
          case "sleet":
            weather_icon = Rainy_3;
            weatherSummary = chanceofPrecipitation + "% chance of Sleet";
            break;
          case "fog":
            weather_icon = Cloudy_4;
            weatherSummary = "Foggy";
            break;
          case "cloudy":
            weather_icon = Cloudy;
            weatherSummary = "Cloudy Skies";
            break;
          case "partly-cloudy-day":
            weather_icon = Cloudy_1;
            weatherSummary = "Partly Cloudy Day";
            break;
          case "partly-cloudy-night":
            weather_icon = Cloudy_Night_2;
            weatherSummary = "Heavy Clouds Tonight";
            break;
          default:
            weather_icon = Generic;
            weatherSummary = "Weather";
            break;
        }
        

        
      }
    });
  };
  $("input").click(function() {
    //flip celsiusOn
    celsiusOn = !celsiusOn;

    if (celsiusOn) {
      $("#temperature").html(
        '<i class="fa fa-thermometer-full" aria-hidden="true"></i>' +
          " " +
          forecast[0].currentTempC +
          " &deg;C"
      );
      $("#todaytemps").html("<p>" + forecast[1].tempLowC + "&deg;C/" + forecast[1].tempHighC + "&deg;C</p>");
      $("#tommorowtemps").html("<p>" + forecast[2].tempLowC + "&deg;C/" + forecast[2].tempHighC + "&deg;C</p>");
      $("#dayaftertemps").html("<p>"+ forecast[3].tempLowC + "&deg;C/" + forecast[3].tempHighC + "&deg;C</p>");

      
    } else {
      $("#temperature").html(
        '<i class="fa fa-thermometer-full" aria-hidden="true"></i>' +
          " " +
          forecast[0].currentTempF +
          " &deg;F"
      );

      $("#todaytemps").html("<p>" + forecast[1].tempLowF + "&deg;F/" + forecast[1].tempHighF + "&deg;F</p>");
      $("#tommorowtemps").html("<p>" + forecast[2].tempLowF + "&deg;F/" + forecast[2].tempHighF + "&deg;F</p>");
      $("#dayaftertemps").html("<p>"+ forecast[3].tempLowF + "&deg;F/" + forecast[3].tempHighF + "&deg;F</p>");
    }
  });

  getWeather();
});
