import React from 'react'
import {
  Form,
  Text,
  TextArea
} from 'react-form'

const SimpleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <div className="container text-center">
      <h1>Contact Nous !</h1>
      <form onSubmit={submitForm}>
        <div className="row col-12">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>Nom : </h6>
            <Text field="Name" placeholder="Pseudo or Name" required />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h6>Email : </h6>
            <Text field="Email" placeholder="Email" required />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h6>Votre Demande : </h6>
          <TextArea field="question" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )}
  />
)

export default SimpleForm
