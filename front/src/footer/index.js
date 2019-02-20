import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/FaqPropos">FAQ / A Propos</Link>
        - Copyright: VERCUCQUE Clément -
        {new Date().getFullYear()}
      </footer>
    )
  }
}

export default Footer
