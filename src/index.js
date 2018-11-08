// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.scss'

// Components
import Routes from './routes'

const Index = () => (
  <div>
    <Routes />
  </div>
)

ReactDOM.render(<Index />, document.getElementById('index'))
