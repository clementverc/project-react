import React, { Component } from 'react'

class SimpleForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="simpleform">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>Nom (ou pseudo) : </h6>
            <input type="text" placeholder="Name" required />
            <h6>Email : </h6>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>Votre Demande : </h6>
            <input type="text" component="textarea" required />
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SimpleForm
