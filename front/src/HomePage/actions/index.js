import actionsType from './actions-type'
import store from '../../store'
import moto from '../../mock/moto.json'

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

const newData = data => ({
  type: actionsType.DATA,
  data
})

export const setData = () => {
  store.dispatch(newData(formatEvents(moto.modeles)))
}

export const modeles = () => (
  formatEvents(moto.modeles)
)

export const searchModeles = dataSearch => ({
  type: actionsType.SEARCH_MODELES,
  dataSearch
})

// tabType c les nom des key (name,permis ect)
// tabValue c les nom des vleur (A2 ect)
// tu doit avoir l'import de ton mock (je l'appelle mock)
export const setSearchData = (tabType, tabValue) => {
  const tabStock = []
  moto.modeles.map(() => {
    let cpt = 0
    Object.keys(tabType).map((el) => {
      if (el[tabType[cpt]] === tabValue[cpt]) {
        tabStock.push(el)
      }
      cpt += 1
      return true
    })
    return true
  })
  store.dispatch(searchModeles(tabStock))
}
