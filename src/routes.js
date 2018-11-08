import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import Permis from './components/permis'
import FaqPropos from './components/faq_propos'
import Header from './components/header'
import Footer from './components/footer'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/permis" component={Permis} exact />
              <Route path="/FaqPropos" component={FaqPropos} exact />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
