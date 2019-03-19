import React, { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  render() {
    const { detail } = this.props.location.state
    const { data } = this.props

    let dom = ''

    data.map((vehicule) => {
      if (detail === vehicule.id) {
        dom = (
          <div className="container text-center">
            <p>Le modèle : {vehicule.name} ({vehicule.cylindree} cc)</p>
            <p>Crée par {vehicule.constructeur} peut etre conduit avec un permis</p>
            <p>{vehicule.permis} car il a une puissance de {vehicule.puissance} ch.</p>
            <p>Ce modèle correspond à la categorie {vehicule.categorie} et pèse {vehicule.poid}.</p>
            <p> Il est équipé d un type de guidon : {vehicule.guidon} et d une distribution à {vehicule.distribution}.</p>
            <p>Il s agit d un modèle à refroidissement {vehicule.refroidissement}.</p>
            <p>Il mesure {vehicule.longeur} cm de longueur et {vehicule.largeur} cm de large.</p>
          </div>
        )
      }
      return ''
    })
    return dom
  }
}

const mapStateToProps = state => (
  {
    data: state.homePage.data
  }
)

export default connect(mapStateToProps)(Details)
