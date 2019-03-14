import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const newData = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)
const searchModeles = (state, action) => (
  fromJS(state)
    .setIn(['dataSearch'], action.dataSearch)
    .toJS()
)

const homePage = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.DATA:
      return newData(state, action)
    case actionsType.SEARCH_MODELES:
      return searchModeles(state, action)
    default:
      return state
  }
}

export default homePage
