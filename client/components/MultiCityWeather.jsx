import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  componentDidMount () {
    let loc, loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9
    let descr, descr1, descr2, descr3, descr4, descr5, descr6, descr7, descr8, descr9
    let temp, temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9
    let humidity, humidity1, humidity2, humidity3, humidity4, humidity5, humidity6, humidity7, humidity8, humidity9
    let wind, wind1, wind2, wind3, wind4, wind5, wind6, wind7, wind8, wind9

    const keyID = 'ed62ea675d460ce49ad75f7dc8bedb10'

    function getMultiCity () {
      const url = 'http://api.openweathermap.org/data/2.5/group?' + 'id=2193733,2179537,2208032,6230919,2188874,6228827,2208333,6241325,2206854,2186313' + '&units=metric' + '&APPID=' + keyID
      sendRequest(url)
    }

    function sendRequest (url) {
      const xmlhttp = new XMLHttpRequest()
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          const data = JSON.parse(xmlhttp.responseText)
          const weather = {}
          weather.humidity = data.list.map(value => value.main.humidity + '%')
          weather.wind = data.list.map(value => value.wind.speed + ' meter/sec')
          weather.loc = data.list.map(value => value.name)
          weather.temp = data.list.map(value => value.main.temp + '&deg')
          weather.descr = data.list.map(value => value.weather[0].description)
          getWeather(weather)
        }
      }
      xmlhttp.open('GET', url, true)
      xmlhttp.send()
    }

    function getWeather (weather) {
      loc.innerHTML = weather.loc[0]
      descr.innerHTML = weather.descr[0]
      temp.innerHTML = weather.temp[0]
      humidity.innerHTML = weather.humidity[0]
      wind.innerHTML = weather.wind[0]

      loc1.innerHTML = weather.loc[1]
      descr1.innerHTML = weather.descr[1]
      temp1.innerHTML = weather.temp[1]
      humidity1.innerHTML = weather.humidity[1]
      wind1.innerHTML = weather.wind[1]

      loc2.innerHTML = weather.loc[2]
      descr2.innerHTML = weather.descr[2]
      temp2.innerHTML = weather.temp[2]
      humidity2.innerHTML = weather.humidity[2]
      wind2.innerHTML = weather.wind[2]

      loc3.innerHTML = weather.loc[3]
      descr3.innerHTML = weather.descr[3]
      temp3.innerHTML = weather.temp[3]
      humidity3.innerHTML = weather.humidity[3]
      wind3.innerHTML = weather.wind[3]

      loc4.innerHTML = weather.loc[4]
      descr4.innerHTML = weather.descr[4]
      temp4.innerHTML = weather.temp[4]
      humidity4.innerHTML = weather.humidity[4]
      wind4.innerHTML = weather.wind[4]

      loc5.innerHTML = weather.loc[5]
      descr5.innerHTML = weather.descr[5]
      temp5.innerHTML = weather.temp[5]
      humidity5.innerHTML = weather.humidity[5]
      wind5.innerHTML = weather.wind[5]

      loc6.innerHTML = weather.loc[6]
      descr6.innerHTML = weather.descr[6]
      temp6.innerHTML = weather.temp[6]
      humidity6.innerHTML = weather.humidity[6]
      wind6.innerHTML = weather.wind[6]

      loc7.innerHTML = weather.loc[7]
      descr7.innerHTML = weather.descr[7]
      temp7.innerHTML = weather.temp[7]
      humidity7.innerHTML = weather.humidity[7]
      wind7.innerHTML = weather.wind[7]

      loc8.innerHTML = weather.loc[8]
      descr8.innerHTML = weather.descr[8]
      temp8.innerHTML = weather.temp[8]
      humidity8.innerHTML = weather.humidity[8]
      wind8.innerHTML = weather.wind[8]

      loc9.innerHTML = weather.loc[9]
      descr9.innerHTML = weather.descr[9]
      temp9.innerHTML = weather.temp[9]
      humidity9.innerHTML = weather.humidity[9]
      wind9.innerHTML = weather.wind[9]
    }

    window.onload = function () {
      const table = document.getElementById('weather-table')
      const row = table.insertRow(-1)
      loc = row.insertCell(0)
      descr = row.insertCell(1)
      temp = row.insertCell(2)
      humidity = row.insertCell(3)
      wind = row.insertCell(4)

      const row1 = table.insertRow(-1)
      loc1 = row1.insertCell(0)
      descr1 = row1.insertCell(1)
      temp1 = row1.insertCell(2)
      humidity1 = row1.insertCell(3)
      wind1 = row1.insertCell(4)

      const row2 = table.insertRow(-1)
      loc2 = row2.insertCell(0)
      descr2 = row2.insertCell(1)
      temp2 = row2.insertCell(2)
      humidity2 = row2.insertCell(3)
      wind2 = row2.insertCell(4)

      const row3 = table.insertRow(-1)
      loc3 = row3.insertCell(0)
      descr3 = row3.insertCell(1)
      temp3 = row3.insertCell(2)
      humidity3 = row3.insertCell(3)
      wind3 = row3.insertCell(4)

      const row4 = table.insertRow(-1)
      loc4 = row4.insertCell(0)
      descr4 = row4.insertCell(1)
      temp4 = row4.insertCell(2)
      humidity4 = row4.insertCell(3)
      wind4 = row4.insertCell(4)

      const row5 = table.insertRow(-1)
      loc5 = row5.insertCell(0)
      descr5 = row5.insertCell(1)
      temp5 = row5.insertCell(2)
      humidity5 = row5.insertCell(3)
      wind5 = row5.insertCell(4)

      const row6 = table.insertRow(-1)
      loc6 = row6.insertCell(0)
      descr6 = row6.insertCell(1)
      temp6 = row6.insertCell(2)
      humidity6 = row6.insertCell(3)
      wind6 = row6.insertCell(4)

      const row7 = table.insertRow(-1)
      loc7 = row7.insertCell(0)
      descr7 = row7.insertCell(1)
      temp7 = row7.insertCell(2)
      humidity7 = row7.insertCell(3)
      wind7 = row7.insertCell(4)

      const row8 = table.insertRow(-1)
      loc8 = row8.insertCell(0)
      descr8 = row8.insertCell(1)
      temp8 = row8.insertCell(2)
      humidity8 = row8.insertCell(3)
      wind8 = row8.insertCell(4)

      const row9 = table.insertRow(-1)
      loc9 = row9.insertCell(0)
      descr9 = row9.insertCell(1)
      temp9 = row9.insertCell(2)
      humidity9 = row9.insertCell(3)
      wind9 = row9.insertCell(4)

      getMultiCity()
    }
  },

  deleteBadWeather () {
    const table = document.getElementById('weather-table')

    for (let i = 1; i < table.rows.length; i++) {
      let rain = table.rows[i].cells[1].innerText.indexOf('rain')
      while (rain > 0) {
        table.deleteRow(i)
      }
    }
  },

  render () {
    return (
      <div>
        <table id='weather-table'>
          <tbody>
            <tr>
              <th>Location</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Wind</th>
            </tr>
          </tbody>
        </table>
        <button onClick={this.deleteBadWeather}>Show me only good places!</button>
      </div>
    )
  }
})
