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

  function getAuckland() {
    const url = 'http://api.openweathermap.org/data/2.5/group?' + 'id=2193733,2179537,2208032,6230919' + '&units=metric' + '&APPID=' + keyID
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
        weather.humidity = data.list.map(value => value.main.humidity + '%')
        weather.wind = data.list.map(value => value.wind.speed + ' meter/sec')
        weather.loc = data.list.map(value => value.name)
        weather.temp = data.list.map(value => value.main.temp + '&deg')
        weather.descr =  data.list.map(value => value.weather[0].description)
        getWeather(weather)
      }
    }
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
  }


  function getWeather(weather) {
    wind.innerHTML = weather.wind
    humidity.innerHTML = weather.humidity
    loc.innerHTML = weather.loc
    temp.innerHTML = weather.temp
    descr.innerHTML = weather.descr
  }

  // function showPosition(position) {
  //   updateByGeo(position.coords.latitude, position.coords.longitude)
  // }

  window.onload = function() {
    temp = document.getElementById('auckland-temperature')
    loc = document.getElementById('auckland-location')
    humidity = document.getElementById('auckland-humidity')
    wind = document.getElementById('auckland-wind')
    descr = document.getElementById('auckland-description')

  //  if (navigator.geolocation) {
  //    navigator.geolocation.getCurrentPosition(showPosition)
  //  }
  //    else {
      //const city = 'London'
     getAuckland()
  //  }
  }

},

render() {
  return(
    <div>
      <div className='location'><p id='auckland-location'></p></div>
      <div className='description'><p id='auckland-description'></p></div>
        <div className='temperature'><p><b>Temperature:</b> <span id='auckland-temperature'></span></p></div>
        <div className='humidity'><p><b>Humidity:</b> <span id='auckland-humidity'></span></p></div>
        <div className='wind'><p><b>Wind:</b> <span id='auckland-wind'></span></p></div>
    </div>
  )
}
})
