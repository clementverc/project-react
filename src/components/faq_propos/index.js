import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faAccusoft } from '@fortawesome/fontawesome-free-brands'

class FaqPropos extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
             Copyright: faq
            <h1>BODY</h1>
            <h3>FontAwesomeIcon :</h3>
            <FontAwesomeIcon icon={faAccusoft} />
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    )
  }
}

export default FaqPropos
