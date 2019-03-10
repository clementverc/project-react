import actionsType from '../actions/actions-types'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsType.GET_ERRORS:
      return action.payload
    default:
      return state
  }
}
