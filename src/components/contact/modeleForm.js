import React, { Component } from 'react'
import {
  Form,
  Text,
  TextArea
} from 'react-form'

class ModeleForm extends Component {
  render() {
    return (
      <Form render={({
        submitForm
      }) => (
        <div className="container text-center">
          <h1>Form Proposition modele !</h1>
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
            <h1>Moteur :</h1>
            <div className="row col-12">
              <div className="form-group col-4">
                <Text field="inputDistribution" placeholder="Distribution" />
              </div>
              <div className="form-group col-4">
                <Text field="inputRefroidissement" placeholder="Refroidissement" />
              </div>
              <div className="form-group col-4">
                <Text field="inputTypeMoteur" placeholder="TypeMoteur" />
              </div>
              <div className="form-group col-4">
                <Text field="inputCylindree" placeholder="inputCylindree" />
              </div>
              <div className="form-group col-4">
                <Text field="inputCouple" placeholder="inputCouple" />
              </div>
              <div className="form-group col-4">
                <Text field="inputPuissance" placeholder="inputPuissance" />
              </div>
            </div>
            <h1>Dimension :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <Text field="inputLongueur" placeholder="Longueur" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputLargeur" placeholder="inputLargeur" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputHauteur" placeholder="inputHauteur" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputEmpattement" placeholder="inputEmpattement" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputHauteurSelle" placeholder="inputHauteurSelle" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputPoid" placeholder="inputPoid" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputReservoir" placeholder="inputReservoir" />
              </div>
            </div>
            <h1>Transmission​ :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <Text field="inputEmbrayage" placeholder="inputEmbrayage" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputBoiteVitesse" placeholder="inputBoiteVitesse" />
              </div>
              <div className="form-group col-md-4">
                <Text field="inputTransmissionFinale" placeholder="inputTransmissionFinale" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h6>Commentaire(s) : </h6>
              <TextArea field="question" required />
            </div>
            <input type="submit" value="Submit" id="input-submit" />
          </form>
        </div>
      )}
      />
    )
  }
}

export default ModeleForm
