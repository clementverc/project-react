import axios from 'axios'
import jwt_decode from 'jwt-decode'
import actionsType from './actions-types'

export const registerUser = (user, history) => (dispatch) => {
  axios.post('http://127.0.0.1:8080/api/users/register', user)
    .then(() => history.push('/login'))
    .catch((err) => {
      dispatch({
        type: actionsType.GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const setCurrentUser = decoded => ({
  type: actionsType.SET_CURRENT_USER,
  payload: decoded
})

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export const loginUser = user => (dispatch) => {
  axios.post('http://127.0.0.1:8080/api/users/login', user)
    .then((res) => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch((err) => {
      dispatch({
        type: actionsType.GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const logoutUser = history => (dispatch) => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
  history.push('/')
}
