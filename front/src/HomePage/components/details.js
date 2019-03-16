import { Component } from 'react'
import { connect } from 'react-redux'

class Details extends Component {
  render() {
    const { detail } = this.props.location.state
    const { data } = this.props

    let dom = ''

    data.map((vehicule) => {
      if (detail === vehicule.id) {
        dom = `Le modèle : ${vehicule.name} (${vehicule.cylindree} cc)
          Crée par ${vehicule.constructeur} peut etre conduit avec un permis
           ${vehicule.permis} puisqu'il a une puissance de ${vehicule.puissance} ch.
          Ce modèle correspond à la categorie ${vehicule.categorie} et pèse ${vehicule.poid}.
          Il est équipé d'un type de guidon : ${vehicule.guidon} et d'une 
          distribution à ${vehicule.distribution}.
          Il s'agit d'un modèle à refroidissement ${vehicule.refroidissement}.
          Il mesure ${vehicule.longeur} cm de longueur et ${vehicule.largeur} cm de large.`
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
