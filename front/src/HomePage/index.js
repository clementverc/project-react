import React, { Component } from 'react'
import { connect } from 'react-redux'

import SelectFields from './components/SelectFields'
import Article from './components/article'
import { setSearchData } from './actions'

class HomePage extends Component {
  componentWillMount() {
    setSearchData(false)
  }

  onChangeSelect() {
    setSearchData(true)
  }

  render() {
    const { data } = this.props

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-s-12">
              <div className="row">
                <h1>Filtrer :</h1>
              </div>
              <SelectFields />
              <input type="submit" className="btn btn-primary" value="Submit" onClick={this.onChangeSelect} />
            </div>
            <div className="col-lg-9 col-s-12">
              <Article data={data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    data: state.homePage.data
  }
)

export default connect(mapStateToProps)(HomePage)
