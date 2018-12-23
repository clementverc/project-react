import React, { Component } from 'react'

class SimpleForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="simpleform">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>First Name : </h6>
            <input type="text" placeholder="First Name" required />
            <h6>Email : </h6>
            <input type="email" placeholder="Email" required />
            <h6>Last Name : </h6>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>Notes : </h6>
            <input type="text" component="textarea" required />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SimpleForm
