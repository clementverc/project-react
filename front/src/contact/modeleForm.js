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
            <h1>Informations Générales :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="name"
                  placeholder="Nom du Modele"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="constructeur"
                  placeholder="Constructeur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="categorie"
                  placeholder="Categorie(es)"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="permis"
                  placeholder="Permis"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="cylindree"
                  placeholder="Cylindree"
                />
              </div>
            </div>
            <h1>Moteur :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="distribution"
                  placeholder="Distribution"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="refroidissement"
                  placeholder="Refroidissement"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="typeMoteur"
                  placeholder="TypeMoteur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="puissance"
                  placeholder="Puissance"
                />
              </div>
            </div>
            <h1>Dimension :</h1>
            <div className="row col-12">
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="longueur"
                  placeholder="Longueur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="largeur"
                  placeholder="Largeur"
                />
              </div>
              <div className="form-group col-md-4">
                <input
                  type="text"
                  className={classnames('form-control form-control-lg')}
                  field="poid"
                  placeholder="Poid"
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
