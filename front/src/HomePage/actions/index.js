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
    const Constructeur = el1.options[el1.selectedIndex].text
    const el2 = document.querySelector('#SelectCategory')
    const Categorie = el2.options[el2.selectedIndex].text
    const el3 = document.querySelector('#SelectPermis')
    const Permis = el3.options[el3.selectedIndex].text
    const el4 = document.querySelector('#SelectGuidon')
    const Guidon = el4.options[el4.selectedIndex].text

    const tabValue = [Constructeur, Categorie, Permis, Guidon]
    const tabType = ['constructeur', 'categorie', 'permis', 'guidon']
    const tabStock = []
    const flag = [false, false, false, false]
    moto.modeles.map((vehicule) => {
      Object.keys(tabType).map((el) => {
        if (vehicule[tabType[el]] === tabValue[el]) {
          flag[el] = true
          console.log(flag)
          console.log('tru')
          console.log(vehicule.id)
        } else {
          console.log('false')
          flag[el] = false
        }
        if (el === 2) {
          return ''
        }
        if (flag[0] === true && flag[1] === true && flag[2] === true && flag[3] === true) {
          tabStock.push(vehicule)
        }
        return ''
      })
      console.log('-----------')
      return ''
    })
    store.dispatch(newData(tabStock))
    console.log(tabStock)
  } else {
    store.dispatch(newData(moto.modeles))
  }
}
