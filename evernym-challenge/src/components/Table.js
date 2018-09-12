import React, { Component } from 'react';
import axios from 'axios';
import './Table.css';

class Table extends Component {
    state = {
        repos: []
    }

    componentDidMount() {
        axios.get('../../api/data.json')
            .then(response => {
                const repos = response.data;
                this.setState({ repos })
            })
    }

    render() {
        return (
            <div>
                <p>Table of repos goes here</p>
                <ul>
                    { this.state.repos }
                </ul>
            </div>
        )
    }
};

export default Table;