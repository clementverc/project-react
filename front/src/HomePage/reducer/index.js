import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../actions/actions-type'

const newData = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

const homePage = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.NEWDATA:
      return newData(state, action)
    default:
      return state
  }
}

export default homePage
