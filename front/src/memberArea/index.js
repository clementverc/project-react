import React, { Component } from 'react'
import { connect } from 'react-redux'

class MemberSpace extends Component {
  render() {
    const { user } = this.props.auth

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h4>Espace Personnel</h4>
            <p>Ici se trouvera votre Espace personnel. Vous pourrez modifier vos informations comme bon vous semble (ou supprimer votre compte).</p>
            <p>Cette partie du site est en cours de création est verra bientot le jours. </p>
          </div>
        </div>
        <div className="row">
          <ul className="tabs">
            <li className="active" rel="tab1" onClick={this.tab1OnClick}>Mes infos personnelles</li>
            <li className="" rel="tab2" onClick={this.tab2OnClick}>Ma moto</li>
          </ul>
          <div className="tab_container">
            <div id="tab1" className="">
              <p>
                <img
                  src={user.avatar}
                  alt={user.name}
                  title={user.name}
                  className="rounded-circle"
                  style={{ width: '25px', marginRight: '5px' }}
                />
                {user.name}
              </p>
              <p>{user.email}</p>
            </div>
            <div id="tab2" className="tab_content">
              <h2>Votre moto :</h2>
              <p>Cette partie du site est en cours de création est verra bientot le jours. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(MemberSpace)
