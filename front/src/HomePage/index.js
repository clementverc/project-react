import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import initialState from './reducer/initial-state'
import Article from './components/article'
import { modeles, setSearchData } from './actions'

class HomePage extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleSubmit(e, dataSearch) {
    e.preventDefault()
    setSearchData(dataSearch)
  }

  render() {
    const data = modeles()
    const { dataSearch } = this.props

    const constructors = [
      { label: 'HONDA', value: 1 },
      { label: 'SUZUKI', value: 2 },
      { label: 'YAMAHA', value: 3 },
      { label: 'DUCATI', value: 4 }
    ]
    const category = [
      { label: 'Sportive', value: 1 },
      { label: 'Roadster', value: 2 },
      { label: 'Trail', value: 3 },
      { label: 'GT', value: 4 }
    ]
    const permis = [
      { label: 'A', value: 1 },
      { label: 'A2', value: 2 },
      { label: 'A1', value: 3 },
      { label: 'AM', value: 4 }
    ]
    const guidon = [
      { label: 'Guidon droit', value: 1 },
      { label: 'Guidon Bracelets', value: 2 },
      { label: 'Guidon Custom', value: 3 },
      { label: 'Guidon Plat', value: 4 },
      { label: 'Guidon Roadster', value: 5 },
      { label: 'Guidon Cross', value: 6 },
      { label: 'Pas de Guidon', value: 7 }
    ]

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-s-12">
              <Select options={constructors} isMulti />
              <Select options={category} isMulti />
              <Select options={permis} isMulti />
              <Select options={guidon} isMulti />
              <input type="submit" className="btn btn-primary" value="Submit" onClick={e => this.handleSubmit(e, dataSearch)} />
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

export default connect(state => state)(HomePage)
