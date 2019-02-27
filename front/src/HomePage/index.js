import React, { Component } from 'react'

import initialState from './initial-state'
import Article from './components/article'
import moto from '../mock/moto.json'

class HomePage extends Component {
  constructor() {
    super()

    this.state = initialState
  }

  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  componentDidMount() {
    // const apiUrl = ''
    // https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info'

    this.setState({ data: this.formatEvents(moto.modeles) })
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.id,
      name: event.name,
      categorie: event.categorie,
      permis: event.permis,
      cylindree: event.cylindree,
      constructeur: event.constructeur
    }))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="row">
                <select className="Builder">
                  <option value="HONDA">HONDA</option>
                  <option value="SUZUKI">SUZUKI</option>
                  <option value="KAWASAKI">KAWASAKI</option>
                  <option value="DUCATI">DUCATI</option>
                </select>
              </div>
              <div className="row">
                <select className="Category">
                  <option value="Sportive">Sportive</option>
                  <option value="Roadster">Roadster</option>
                  <option value="Trail">Trail</option>
                  <option value="Gt">Gt</option>
                </select>
              </div>
              <div className="row">
                <select className="Guidon">
                  <option value="GuidonDroit">Guidon droit</option>
                  <option value="GuidonBracelet">Guidon Bracelets</option>
                  <option value="GuidonCustom">Guidon Custom</option>
                  <option value="GuidonPlat">Guidon Plat</option>
                  <option value="GuidonRoadster">Guidon Roadster</option>
                  <option value="GuidonCross">Guidon Cross</option>
                  <option value="NoGuidon">Pas de Guidon</option>
                </select>
              </div>
              <div className="row">
                <select className="Permis">
                  <option value="A">A</option>
                  <option value="A2">A2</option>
                  <option value="A1">A1</option>
                  <option value="AM">AM</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Rechercher
              </button>
            </div>
            <div className="col-9">
              <Article data={data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
