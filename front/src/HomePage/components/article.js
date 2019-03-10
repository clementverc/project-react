import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Modèle</th>
              <th scope="col">permis</th>
              <th scope="col">constructeur</th>
              <th scope="col">cylindree</th>
              <th scope="col">categorie</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link to={{ pathname: '/details', state: { detail: item.id } }}>
                    {`${item.name}`}
                  </Link>
                </td>
                <td>
                  {`${item.permis}`}
                </td>
                <td>
                  {`${item.constructeur}`}
                </td>
                <td>
                  {`${item.cylindree}`}
                </td>
                <td>
                  {`${item.categorie}`}
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Article
