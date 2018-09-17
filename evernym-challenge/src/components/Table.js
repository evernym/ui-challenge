import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const url = 'https://75c29e94-4eba-4c64-b803-ab00cf491e57.mock.pstmn.io/evernymchallenge'

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
  }

  render() {
    const data = this.state.data
    
    const columns = [{
      Header: 'Name',
      accessor: 'name'
    },{
      Header: 'Owner',
      accessor: 'owner.login'
    },{
      Header: 'Pushed At',
      accessor: 'pushedAt'
    },{
      Header: 'Description',
      accessor: 'description'
    },{
      Header: 'Fork Count',
      accessor: 'forkCount'
    },{
      Header: 'Star Gazers',
      accessor: 'stargazers.totalCount'
    },{
      Header: 'Primary Language',
      accessor: 'primaryLanguage.name'
    }]

    return (
      <div>  
       <ReactTable
        data={data}
        columns={columns}
        />
      </div>
    )
  }
}

export default Table