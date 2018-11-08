// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faAccusoft } from '@fortawesome/fontawesome-free-brands'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.scss'

// Components
import Header from './components/header'
import Footer from './components/footer'

const Index = () => (
  <div>
    <Header />
    <div className="container">
      <h1>BODY</h1>
      <h3>FontAwesomeIcon :</h3>
      <FontAwesomeIcon icon={faAccusoft} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faSearch} />
    </div>
    <Footer />
  </div>
)

ReactDOM.render(<Index />, document.getElementById('index'))
