import { combineReducers } from 'redux'

import homePage from './HomePage/reducer'
import errorReducer from './memberArea/reducers/errorReducer'
import authReducer from './memberArea/reducers/authReducer'

export default combineReducers({
  homePage,
  errors: errorReducer,
  auth: authReducer
})
