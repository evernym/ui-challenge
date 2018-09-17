import React, { Component } from 'react'
import './Table.css'

// Can get data locally with variable below but must be in the src folder
// Prefer to fetch externally
// const repos = require('../../src/data.json')

// Using postman is one way to create a mock external api
const url = 'https://75c29e94-4eba-4c64-b803-ab00cf491e57.mock.pstmn.io/evernymchallenge'

// const row = ({name, owner, pushed, description, forkcount}) => (
//   <div className="row">
//     <div>{name}</div>
//     <div>{owner}</div>
//     <div>{pushed}</div>
//     <div>{description}</div>    
//     <div>{forkcount}</div>    
//   </div>
// )

class Table extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then((findresponse) => {
      console.log(findresponse.data.repositories)
      this.setState({
        data: findresponse.data.repositories
      })
    })
    // this.compareBy.bind(this)
    // this.sortBy.bind(this)
  }

  // compareBy(key) {
  //   return function (a, b) {
  //     if (a[key] < b[key]) return -1
  //     if (a[key] > b[key]) return 1
  //     return 0
  //   }
  // }

  // sortBy(key) {
  //   let arrayCopy = [...this.state.data]
  //   arrayCopy.sort(this.compareBy(key))
  //   this.setState({
  //     data: arrayCopy
  //   })
  // }

  render() {
  //   const rows = this.state.data.map( (rowData) => <row {...rowData} />)

    return (
      <div>
        <p>Table goes here</p>
        <table>
          <tbody>{this.state.data.map(function(item, key) {
            
            return (
              <tr key = {key}>
                <td></td>
              </tr>
            )
    
          })

          }</tbody>
        </table>

      </div>
      
      // <div className="table">
      //   <div className="column">
      //     <div className="header">
      //       <div onClick={() => this.sortBy('name')} >Name</div>
      //       <div onClick={() => this.sortBy('owner')}>Owner</div>
      //       <div onClick={() => this.sortBy('pushed')}>Pushed</div>
      //       <div onClick={() => this.sortBy('description')}>Description</div>
      //       <div onClick={() => this.sortBy('forkcount')}>Fork Count</div>
      //     </div>
      //   </div>
      //   <div>
      //     {rows}
      //   </div>
      // </div>
    )
  }
}

export default Table;