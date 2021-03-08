//Declare blank variable to store the city being searched
var city="";
//Other variables 
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var clearButton = document.getElementById("clear-history");
var currentCity = document.getElementById("current-city");
var currentTemperature = document.getElementById("temperature");
var currentHumidity = document.getElementById("humidity");
var currentWSpeed = document.getElementById("wind-speed");
var currentUvindex = document.getElementById("uv-index");
var sCity = [];



function getWeather (searchButton) {
var APIKey = "368f0dfb7fca45eca19e06a8a0186e1c";
function showWeather(event) {
    event.preventDefault();
    if(searchCity.val()!=="") {
        city=searchCity.val();
        currentWeather(city);
    }
}
//Fetch request created
requestUrl = "api.openweathermap.org/data/2.5/forecast?q= + sCity + &appid= + APIKey"
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

    //grabs the weather icon from the api
    var weatherIcon = response.weather[0].icon;
    var iconUrl="hhtps://openweathermap.org/img/wn/"+weathericon +"@2x.png";

    //I lifted the code used for the date here from  mdn
    var date = new Date(response.dt*100).toLocaleDateString();
    //parse the response for the name of the city and concatonated the icon and date


    //parse the response to get the current temperature

    //convert the temperature to farenheit


    //displays the humidity
    document.getElementById(currentHumidity).innerHTML(response.main.humidity);

    //displays the wind speed and converts it to mph
    var ws=response.wind.speed;
    var windy=(ws*2.237).toFixed(1);
    document.getElementById(currentWSpeed).innerHTML(windy+"MPH");

    //displays the uv index


    //displays the five day forecast for the chosen city




    //click handlers



}

