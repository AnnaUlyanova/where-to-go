import React from 'react'
import CreateReactClass from 'create-react-class'

import Weather from './Weather'

export default CreateReactClass({
  render() {
    return (
      <div>
      <h1>Where should I go?</h1>
      <Weather />
      </div>
    )
  }
})
