import React from 'react'

const Login = () => (
  <form>
    <label htmlFor="pseudo">
      Name:
      <input id="pseudo" />
    </label>
    <label htmlFor="password">
      Password:
      <input id="password" />
    </label>
    <input type="button" onClick="getInfo" />
  </form>
)

export default Login
