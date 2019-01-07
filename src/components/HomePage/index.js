import React, { Component } from 'react'

import initialState from './initial-state'
import Article from './components/article'
import moto from '../../mock/moto.json'

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
          <Article data={data} />
        </div>
      </div>
    )
  }
}

export default HomePage
