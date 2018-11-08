import React, { Component } from 'react'

class Permis extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            &copy;
            {new Date().getFullYear()}
             Copyright: permis
          </div>
        </div>
      </div>
    )
  }
}

export default Permis
