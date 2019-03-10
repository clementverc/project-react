import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import Permis from './permis'
import FaqPropos from './faq_propos'
import Header from './header'
import Footer from './footer'
import Details from './HomePage/components/details'
import SimpleForm from './contact'
import ModeleForm from './contact/modeleForm'
import Login from './memberArea/components/login'
import Register from './memberArea/components/Register'
import MemberSpace from './memberArea/index'

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
              <Route path="/contact" component={SimpleForm} exact />
              <Route path="/modeleForm" component={ModeleForm} exact />
              <Route path="/register" component={Register} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/memberSpace" component={MemberSpace} exact />
              <Route path="/details" component={Details} exact />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
