import React, { Component } from 'react';
import './Table.css';

const url = '../../api/data.json'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(data => this.setState({ data }))
    }

    render() {
        return (
            <div>
                <p>Table of repos goes here</p>
            </div>
        )
    }
};

export default Table;