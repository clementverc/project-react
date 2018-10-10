import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header'
import Footer from './components/footer'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.scss'

const Index = () => (
  <div>
    <div className="container">
      <h1>BODY</h1>
      <h1>BODY</h1>
    </div>
  </div>
)

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Index />, document.getElementById('index'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
