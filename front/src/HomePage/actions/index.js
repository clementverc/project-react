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
    constructeur: event.constructeur
  }))
)

export const setData = () => {
  store.dispatch(newData(formatEvents(moto.modeles)))
  return formatEvents(moto.modeles)
}

