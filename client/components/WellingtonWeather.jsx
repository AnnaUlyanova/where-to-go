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

  function getWellington() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?' + 'q=Wellington' + '&units=metric' + '&APPID=' + keyID
    sendRequest(url)
  }

  // function updateByGeo (lat, lon) {
  //   const url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + '&units=metric' + '&APPID=' + keyID
  //   sendRequest(url)
  // }

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

  // function showPosition(position) {
  //   updateByGeo(position.coords.latitude, position.coords.longitude)
  // }

  window.onload = function() {
    temp = document.getElementById('wellington-temperature')
    loc = document.getElementById('wellington-location')
    humidity = document.getElementById('wellington-humidity')
    wind = document.getElementById('wellington-wind')
    descr = document.getElementById('wellington-description')

  //  if (navigator.geolocation) {
  //    navigator.geolocation.getCurrentPosition(showPosition)
  //  }
  //    else {
      //const city = 'London'
     getWellington()
  //  }
  }

},

render() {
  return(
    <div>
      <div className='location'><p id='wellington-location'></p></div>
      <div className='description'><p id='wellington-description'></p></div>
        <div className='temperature'><p><b>Temperature:</b> <span id='wellington-temperature'></span></p></div>
        <div className='humidity'><p><b>Humidity:</b> <span id='wellington-humidity'></span></p></div>
        <div className='wind'><p><b>Wind:</b> <span id='wellington-wind'></span></p></div>
    </div>
  )
}
})
