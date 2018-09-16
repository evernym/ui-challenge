import React, { Component } from 'react';
import './Table.css';

const repos = require('../../src/data.json')

const Row = ({name, owner, pushed, description, forkcount}) => (
  <div className="row">
    <div>{name}</div>
    <div>{owner}</div>
    <div>{pushed}</div>
    <div>{description}</div>    
    <div>{forkcount}</div>    
  </div>
);

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'yodaqa',
          owner: 'brmson',
          pushed: '2018-08-05T18:55:32Z',
          description: 'A Question Answering system built on top of the Apache UIMA framework.',
          forkcount: 199
        },
        {
          name: 'yoda',
          owner: 'yoda-pa',
          pushed: '2018-09-10T10:11:59Z',
          description: 'Wise and powerful personal assistant, available in your nearest terminal.',
          forkcount: 105
        },
        {
          name: 'yoda',
          owner: 'whoisandy',
          pushed: '2016-11-30T15:13:51Z',
          description: 'A nifty Mac OS X app to browse and download YouTube videos.',
          forkcount: 59
        },
      ],
    };
    
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('name')} >Name</div>
          <div onClick={() => this.sortBy('owner')}>Owner</div>
          <div onClick={() => this.sortBy('pushed')}>Pushed</div>
          <div onClick={() => this.sortBy('description')}>Description</div>
          <div onClick={() => this.sortBy('forkcount')}>Fork Count</div>
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    ); 
  }
}

export default Table;