import React from 'react'

const Article = ({ data }) => (
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
          <tr key={item.id}>
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
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Article
