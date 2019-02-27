import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class MemberSpace extends Component {
  // $(".tab_content:first").show();
  // /* if in tab mode */
  //   $("ul.tabs li").click(function() {
  //     $(".tab_content").hide()
  //     var activeTab = $(this).attr("rel")
  //     $("#"+activeTab).fadeIn()
  //     $("ul.tabs li").removeClass("active")
  //     $(this).addClass("active")
  //   })

  tab1OnClick() {
  }

  tab2OnClick() {
    console.log('tab2clicked !')
  }

  render() {
    const { user } = this.props.auth

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h4>Espace Personnel</h4>
            <p>Ici se trouve votre Espace personnel. Vous pouvez modifier vos informations comme bon vous semble (ou supprimer votre compte).</p>
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
              <h2>Tab 1 content</h2>
              <p>{user.name}</p>
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

export default connect(mapStateToProps)(withRouter(MemberSpace))
