import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Form
} from 'react-form'

class ModeleForm extends Component {
  render() {
    return (
      <Form render={({
        submitForm
      }) => (
        <div className="container text-center">
          <h1>Propose un modèle !</h1>
          <form onSubmit={submitForm}>
            <div className="row col-12">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="name"
                  className={classnames('form-control form-control-lg')}
                  field="Pseudo or Name"
                  placeholder="Pseudo or Name"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="email"
                  className={classnames('form-control form-control-lg')}
                  field="Email"
                  placeholder="Email"
                />
              </div>
            </div>
            <h1>Moteur :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="Distribution"
                  placeholder="Distribution"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="Refroidissement"
                  placeholder="Refroidissement"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="TypeMoteur"
                  placeholder="TypeMoteur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputCylindree"
                  placeholder="inputCylindree"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputCouple"
                  placeholder="inputCouple"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputPuissance"
                  placeholder="inputPuissance"
                />
              </div>
            </div>
            <h1>Dimension :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="Longueur"
                  placeholder="Longueur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputLargeur"
                  placeholder="inputLargeur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputBoiteVitesse"
                  placeholder="inputBoiteVitesse"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputEmpattement"
                  placeholder="inputEmpattement"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputHauteurSelle"
                  placeholder="inputHauteurSelle"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputPoid"
                  placeholder="inputPoid"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputReservoir"
                  placeholder="inputReservoir"
                />
              </div>
            </div>
            <h1>Transmission​ :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputEmbrayage"
                  placeholder="inputEmbrayage"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputBoiteVitesse"
                  placeholder="inputBoiteVitesse"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="inputTransmissionFinale"
                  placeholder="inputTransmissionFinale"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h6>Commentaire(s) : </h6>
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
  }
}

export default ModeleForm
