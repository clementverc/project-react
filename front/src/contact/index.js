import React from 'react'
import classnames from 'classnames'
import {
  Form
} from 'react-form'

const SimpleForm = () => (
  <Form render={({
    submitForm
  }) => (
    <div className="container" style={{ marginTop: '50px', width: '700px' }}>
      <h2 style={{ marginBottom: '40px' }}>Contact Nous !</h2>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <input
            type="text"
            field="Name"
            className={classnames('form-control form-control-lg')}
            placeholder="Pseudo or Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            field="Email"
            className={classnames('form-control form-control-lg')}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <h6>Votre Demande : </h6>
          <textarea
            field="question"
            className="form-control form-control-lg"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  )}
  />
)

export default SimpleForm
