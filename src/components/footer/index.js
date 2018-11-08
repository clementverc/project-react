import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/FaqPropos">FAQ / A Propos</Link>
              - Copyright: A2ROO -
              <Link to="/">Nous Contacter</Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
