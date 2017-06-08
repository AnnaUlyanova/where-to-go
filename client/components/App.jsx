import React from 'react'
import CreateReactClass from 'create-react-class'

import WellingtonWeather from './WellingtonWeather'
import AucklandWeather from './AucklandWeather'
import TaurangaWeather from './TaurangaWeather'
import MultiCityWeather from './MultiCityWeather'

export default CreateReactClass({
  render() {
    return (
      <div>
        <h1>Where should I go?</h1>
        <MultiCityWeather />
      </div>
    )
  }
})
