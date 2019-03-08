import React, { Component } from 'react'
import { bla } from '../HomePage/actions'

class Details extends Component {
  render() {
    const { detail } = this.props.location.state
    const troll = bla()
    const data = troll[detail - 1]
    console.log(data)

    return (
      <div>
        <ul className="text-center">
          <li className="font-weight-bold" key={data.id}>{data.name}</li>
          <li className="" key={data.permis}>
            {`${data.city} ${data.constructeur} du ${data.cylindree} au ${data.categorie}`}
          </li>
        </ul>
      </div>
    )
  }
}

export default Details
