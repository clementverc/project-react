import actionsType from '../actions/actions-types'
import isEmpty from '../validation/is-empty'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsType.SET_CURRENT_USER:
      return {
        state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state
  }
}
