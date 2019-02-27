// import React from 'react'

// class Test extends React.Component {
//   constructor() {
//     super()
//     this.handleChange = this.handleChange.bind(this)

//     this.state = {
//       names: ['Jonny Stromberg', 'Jonas Arnklint', 'Martina Elm']
//     }
//   }

//   handleChange(e) {
//     const condition = new RegExp(e.target.value, 'i')
//     const names = this.state.names.filter(name => {
//       condition.test(name)
//     })

//     this.setState({
//       names
//     })
//   }

//   render() {
//     const names = this.state.names.map((name, index) => {
//       return (
//         <li key={index}>
//           <h3 className="name">{ name }</h3>
//         </li>
//       )
//     })

//     return (
//       <div>
//         <input
//           className="search"
//           placeholder="Search"
//           onChange={this.handleChange}
//         />
//         <ul className="list">{ names }</ul>
//       </div>
//     )
//   }
// }
// export default Test
