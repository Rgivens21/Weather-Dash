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

var requestUrl = http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=368f0dfb7fca45eca19e06a8a0186e1c


var api.openweathermap.org/data/2.5/forecast?q={searchCity}&appid={APIKey}