import React, { Component } from 'react'
import moto from '../mock/moto.json'

class Details extends Component {
  constructor() {
    super()
    this.getData()
  }

  getData() {
    this.setState({ data: this.formatEvents(moto.modeles) })
  }

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
    const { detail } = this.props.location.state
    const { data } = this.props
    console.log('---------')
    console.log(detail)
    console.log(data)

    return (
      <div>
        { data.map(item => (
          <ul className="text-center">
            <li className="font-weight-bold" key={item.id}>{item.name}</li>
            <li className="" key={item.permis}>
              {`${item.city} ${item.constructeur} du ${item.cylindree} au ${item.categorie}`}
            </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Details
