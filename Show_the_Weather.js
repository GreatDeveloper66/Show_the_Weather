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

$(document).ready(function() {
  //first get location information
  //make a call to freeoip
  //create Coordinates

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
        $("#Locale").html(City + ", " + State);
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

        alert(data);

        $("#temperature").html(
          '<i class="fa fa-thermometer-full" aria-hidden="true"></i>' +
            " " +
            tempFarenheit +
            " &deg;F"
        );
        $("#humidity").html("Humidity: " + humidity);

        if (chanceofPrecipitation === 0) {
          $("#Precipitation").html("Clear Skys");
        } else {
          $("#Precipitation").html(
            chanceofPrecipitation + "% chance of " + precipType
          );
        }

        $("#Pressure").html(
          '<i class="fa fa-angle-double-down" aria-hidden="true"></i>' +
            "Pressure: " +
            pressure +
            " milibars"
        );

        $("#apparentemperature").html(
          "Feels Like " + apparentTempFarenheit + " &deg;F"
        );

        $("#coordinates").html(
           '<i class="fa fa-globe" aria-hidden="true"></i>' + ' ' + lat + '&deg; N' + long + '&deg; W');

        //Choose icon based on weather conditions
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
        weather_icon_html = '<img src="' + weather_icon + '"/>';
        $("#Icon").html(weather_icon_html);

        $("#Condition").html(weatherSummary);
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
          tempCelsius +
          " &deg;C"
      );
      $("#apparentemperature").html(
        "Feels Like " + apparentTempCelsius + " &deg;C"
      );
    } else {
      $("#temperature").html(
        '<i class="fa fa-thermometer-full" aria-hidden="true"></i>' +
          " " +
          tempFarenheit +
          " &deg;F"
      );
      $("#apparentemperature").html(
        "Feels Like " + apparentTempFarenheit + " &deg;F"
      );
    }
  });

  getWeather();
});
