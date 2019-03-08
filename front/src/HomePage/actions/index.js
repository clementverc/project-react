import actionsType from './actions-type'
import store from '../../store'
import moto from '../../mock/moto.json'

const newData = data => ({
  type: actionsType.NEW_DATA,
  data
})

/**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
*/
const formatEvents = events => (
  events.map(event => ({
    id: event.id,
    name: event.name,
    categorie: event.categorie,
    permis: event.permis,
    cylindree: event.cylindree,
    constructeur: event.constructeur,
    distribution: event.distribution,
    refroidissement: event.refroidissement,
    typeMoteur: event.typeMoteur,
    puissance: event.puissance,
    longeur: event.longeur,
    largeur: event.largeur,
    poid: event.poid,
    guidon: event.guidon
  }))
)

export const setData = () => {
  store.dispatch(newData(formatEvents(moto.modeles)))
  // return formatEvents(moto.modeles)
}

export const bla = () => (
  formatEvents(moto.modeles)
)

