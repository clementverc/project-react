// Dependencies
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import setAuthToken from './setAuthToken'
import { setCurrentUser, logoutUser } from './memberArea/actions/authentication'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.scss'

// Components
import Routes from './routes'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }
}

const Index = () => (
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>
)

ReactDOM.render(<Index />, document.getElementById('index'))
registerServiceWorker()
