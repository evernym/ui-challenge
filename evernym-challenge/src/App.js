import React, { Component } from 'react'
import './App.css'
import Table from './components/Table'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Evernym UI Challenge</h1>
        </header>
        <p className="App-intro">Favorite GitHub Repos</p>
        <div>
          <Table />
        </div>
      </div>
    )
  }
}

export default App
