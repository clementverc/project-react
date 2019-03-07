import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ data }) => {
  console.log(data)
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>permis</th>
            <th>constructeur</th>
            <th>cylindree</th>
            <th>categorie</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <a>
              <tr key={item.id}>
                <Link to={{ pathname: '/details', state: { detail: item.id } }}>
                  <td>
                    {`${item.id}`}
                  </td>
                  <td>
                    {`${item.name}`}
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
                </Link>
              </tr>
            </a>))
        }
        </tbody>
      </table>
    </div>
  )
}

export default Article
