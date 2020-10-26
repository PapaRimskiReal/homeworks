import React, { Component } from 'react';

import './TodoListItem.css'

export default class TodoListItem extends Component {

    state = {
        important: false,
        completed: false
    };

    onLabelClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };

    onCompletedClick = () => {
        this.setState(({completed}) => {
            return {
                completed: !completed
            }
        })
    };

    render() {

        const { content } = this.props;
        const { important, completed } = this.state;

        let classNames = 'todo-list-item';
        if (important) {classNames += ' important'};
        if (completed) {classNames += ' completed'};

        return (
            <span className={classNames}>
                <span className="todo-list-item-content"
                    // style={style}
                    onClick={this.onLabelClick}>
                    {content}
                </span>
                <div>
                    <button className="button-complete" onClick={this.onCompletedClick}>Complete</button>
                    <button className="button-delete">Delete</button>
                </div>
            </span>
        );
    }
}

