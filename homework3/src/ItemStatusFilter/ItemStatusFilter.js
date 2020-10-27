import React, { Component } from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {


    render() {
        return (
            <div className="btn-group filter">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary">Completed</button>
                <button type="button" className="btn btn-outline-secondary">Uncomplited</button>
            </div>
        )
    }
}