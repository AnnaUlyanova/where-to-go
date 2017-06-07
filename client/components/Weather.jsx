import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  componentDidMount() {
    var temp;
  var loc;
  var icon;
  var humidity;
  var wind;
  var descr;
  var keyID = "ed62ea675d460ce49ad75f7dc8bedb10";
  //var iconSrc = "http://api.openweathermap.org/img/w/" + icon + ".png";

  function getByCity(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&units=metric" + "&APPID=" + keyID;
    sendRequest(url);
  }

  function updateByGeo (lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&lon=" + lon + "&units=metric" + "&APPID=" + keyID;
    sendRequest(url);
  }

  function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var data = JSON.parse(xmlhttp.responseText);
        //var iconSrc = "http://api.openweathermap.org/img/w/" + icon + ".png";
        var weather = {};
        weather.humidity = data.main.humidity;
        weather.wind = data.wind.speed;
        weather.loc = data.name;
        weather.temp = data.main.temp;
        weather.icon = data.weather[0].icon;
        weather.descr =  data.weather[0].description;
        getWeather(weather);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }


  function getWeather(weather) {
    wind.innerHTML = weather.wind + " meter/sec";
    humidity.innerHTML = weather.humidity + "%";
    //loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp + "&deg;";
    //icon.innerHTML = weather.icon;
    descr.innerHTML = weather.descr;
  // var iconSrc = "http://api.openweathermap.org/img/w/" + weather.icon + ".png";
  // $("#icon").prepend('<img src = "' + iconSrc +'" >');
  }

  function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude);
  }

  window.onload = function() {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    descr = document.getElementById("description");



   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
   }
     else {
      var city = window.prompt("What is your city?");
    getByCity(city);
   }
  }

},

render() {
  return(
    <div>
      <div className="description"><p id="description"></p></div>
        <div className="temperature"><p><b>Temperature:</b> <span id="temperature"></span></p></div>
        <div className="humidity"><p><b>Humidity:</b> <span id="humidity"></span></p></div>
        <div className="wind"><p><b>Wind:</b> <span id="wind"></span></p></div>    
    </div>
  )
}
})
