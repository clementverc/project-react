import React from 'react'

const Results = ({ data }) => (
  <div>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>titre</th>
          <th>ville</th>
          <th>adresse</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>
              {`titre: ${item.title}`}
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
        ))}
      </tbody>
    </table>
  </div>
)

export default Results
