//Declare blank variable to store the city being searched
var city="";
//Other variables declared
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var clearButton = document.getElementById("clear-history");
var currentCity = document.getElementById("current-city");
var currentTemperature = documents.getElementById("temperature");
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

function currentWeather(city)
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + sCity + "&appid=" + APIKey;
$ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {


    var weatherIcon = response.weather[0].icon;
    var iconUrl="hhtps://openweathermap.org/img/wn/"+weathericon +"@2x.png";

    var date = new Date(response.dt*100).toLocaleDateString();
}

