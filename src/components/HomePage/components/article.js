import React from 'react'

const Article = ({ data }) => (
  <div>
    {data.map(item => (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>image</th>
            <th>titre</th>
            <th>debut</th>
            <th>fin</th>
            <th>ville</th>
            <th>adresse</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          <tr key={item.id}>
            <img className="floatLeft" src={item.image} alt="img-event" height="10%" width="10%" />
            <td>
              {`titre: ${item.title}`}
            </td>
            <td>
              {`début: ${item.dateStart}`}
            </td>
            <td>
              {`fin: ${item.dateEnd}`}
            </td>
            <td>
              {`ville: ${item.city}`}
            </td>
            <td>
              {`adresse: ${item.address}`}
            </td>
            <td>
              {`description: ${item.description}`}
            </td>
          </tr>
        </tbody>
      </table>
    ))}
  </div>
)

export default Article
