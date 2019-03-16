import actionsType from './actions-type'
import store from '../../store'
import moto from '../../mock/moto.json'

const newData = data => ({
  type: actionsType.DATA,
  data
})

export const setSearchData = (filter) => {
  if (filter) {
    const el1 = document.querySelector('#SelectConstructor')
    const Construteur = el1.options[el1.selectedIndex].text
    const el2 = document.querySelector('#SelectCategory')
    const Categorie = el2.options[el2.selectedIndex].text
    const el3 = document.querySelector('#SelectPermis')
    const Permis = el3.options[el3.selectedIndex].text
    const el4 = document.querySelector('#SelectGuidon')
    const Guidon = el4.options[el4.selectedIndex].text

    const tabValue = [Construteur, Categorie, Permis, Guidon]
    const tabType = ['constructeur', 'categorie', 'permis', 'guidon']
    const tabStock = []
    moto.modeles.map((vehicule) => {
      Object.keys(tabType).map((el, index) => {
        if (vehicule[tabType[el[index]]] === tabValue[index]) {
          tabStock.push(vehicule)
        }
        return ''
      })
      return ''
    })
    store.dispatch(newData(tabStock))
  } else {
    store.dispatch(newData(moto.modeles))
  }
}
