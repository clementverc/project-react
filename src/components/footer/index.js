import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            &copy;
            {new Date().getFullYear()}
             Copyright: Test
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
