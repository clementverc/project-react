import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../memberArea/actions/authentication'

class Header extends Component {
  onLogout(e) {
    e.preventDefault()
    this.props.logoutUser(this.props.history)
  }

  render() {
    const { isAuthenticated, user } = this.props.auth
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
          <img
            src={user.avatar}
            alt={user.name}
            title={user.name}
            className="rounded-circle"
            style={{ width: '25px', marginRight: '5px' }}
          />
          Logout
        </a>
      </ul>
    )
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
        </li>
      </ul>
    )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <Link className="navbar-brand" to="/">
          Projet React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Les Modèles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/permis">
                Les Permis
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nous Contacter
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/contact">
                  Contacter la team
                </Link>
                <Link className="dropdown-item" to="/modeleForm">
                  Proposer un modèle
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
// Header.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Header))
