import axios from 'axios'
import React, { Component } from 'react'

import initialState from './initial-state'
import Results from './components/results'
import SearchBar from './components/search-bar'
import mock from '../../mock/mock.json'

class Search extends Component {
  constructor() {
    super()

    this.state = initialState
    this.getValue = this.searchResult.bind(this)
  }

  /**
   * Get data
   * @param {string} query
   * @return {Object} dataFormatted
   */
  getData() {
    const apiUrl = ''
    // https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info`

    axios.get(apiUrl)
      .then((response) => {
        this.state.data = this.formatEvents(response.data.records)

        this.setState({
          data: this.formatEvents(response.data.records)
        })
      })
      .catch(() => {
        this.state.data = this.formatEvents(mock.data)

        this.setState({
          data: this.formatEvents(mock.data)
        })
      })
  }

  searchResult(value) {
    this.getData(value)
  }

  /**
   * Format events
   * @param {Array} events
   * @return {Array} eventsFormatted
   */
  formatEvents(events) {
    return events.map(event => ({
      id: event.recordid,
      address: event.fields.address,
      city: event.fields.city,
      description: event.fields.description,
      title: event.fields.title
    }))
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <SearchBar searchResult={this.getValue} />
        <Results data={data} />
      </div>
    )
  }
}

export default Search
