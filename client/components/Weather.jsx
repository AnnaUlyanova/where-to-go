import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  componentDidMount() {
    let temp
    let loc
    let humidity
    let wind
    let descr
    const keyID = 'ed62ea675d460ce49ad75f7dc8bedb10'

  function getByCity(city) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=' + city + '&units=metric' + '&APPID=' + keyID
    sendRequest(url)
  }

  function updateByGeo (lat, lon) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + '&units=metric' + '&APPID=' + keyID
    sendRequest(url)
  }

  function sendRequest(url){
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        const data = JSON.parse(xmlhttp.responseText)
        const weather = {}
        weather.humidity = data.main.humidity
        weather.wind = data.wind.speed
        weather.loc = data.name
        weather.temp = data.main.temp
        weather.descr =  data.weather[0].description
        getWeather(weather)
      }
    }
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
  }


  function getWeather(weather) {
    wind.innerHTML = weather.wind + ' meter/sec'
    humidity.innerHTML = weather.humidity + '%'
    loc.innerHTML = weather.loc
    temp.innerHTML = weather.temp + '&deg'
    descr.innerHTML = weather.descr
  }

  function showPosition(position) {
    updateByGeo(position.coords.latitude, position.coords.longitude)
  }

  window.onload = function() {
    temp = document.getElementById('temperature')
    loc = document.getElementById('location')
    humidity = document.getElementById('humidity')
    wind = document.getElementById('wind')
    descr = document.getElementById('description')

   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition)
   }
     else {
      const city = window.prompt('What is your city?')
    getByCity(city)
   }
  }

},

render() {
  return(
    <div>
      <div className='location'><p id='location'></p></div>
      <div className='description'><p id='description'></p></div>
        <div className='temperature'><p><b>Temperature:</b> <span id='temperature'></span></p></div>
        <div className='humidity'><p><b>Humidity:</b> <span id='humidity'></span></p></div>
        <div className='wind'><p><b>Wind:</b> <span id='wind'></span></p></div>
    </div>
  )
}
})
