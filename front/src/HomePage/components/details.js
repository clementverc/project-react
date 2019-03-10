import React, { Component } from 'react'
import { modeles } from '../actions'

class Details extends Component {
  render() {
    const { detail } = this.props.location.state
    const modeleSelected = modeles()
    const data = modeleSelected[detail - 1]
    console.log(data)

    return (
      <div className="text-center">
        <p>Nom du modèle : {data.name}({data.cylindree} cc).</p>
        <p>Crée par : {data.constructeur}.</p>
        <p>Disponible pour les permis : {data.permis}.</p>
        <p>Ce modèle correspond à la categorie {data.categorie} et pèse {data.poid}.</p>
        <p>Type de guidon : {data.guidon}</p>
        <p>Distribution à {data.distribution}.</p>
        <p>Modèle à refroidissement {data.refroidissement}.</p>
        <p>Puissance : {data.puissance} ch.</p>
        <p> {data.typeMoteur}.</p>
        <p>Longueur : {data.longeur} cm.</p>
        <p>Largeur : {data.largeur} cm.</p>
      </div>
    )
  }
}

export default Details
