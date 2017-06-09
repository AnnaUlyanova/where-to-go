import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, HashRouter} from 'react-router-dom'

import App from './components/App'
import AucklandWeather from './components/AucklandWeather'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (<HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/auckland' component={AucklandWeather} />
      </div>
    </HashRouter>
  ),
    document.getElementById('app')
  )
})
