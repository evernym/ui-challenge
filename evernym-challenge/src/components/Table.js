import React, { Component } from 'react';
import axios from 'axios';
import './Table.css';

class Table extends Component {
    componentDidMount() {
        axios.get('')
            .then(response => {
                console.log(response)
            })
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