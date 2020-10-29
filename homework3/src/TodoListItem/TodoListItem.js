import React, { Component } from 'react';

import './TodoListItem.css'

export default class TodoListItem extends Component {

    render() {

        const { content, onDeleted, onToggleImportant, onToggleCompleted, important, completed } = this.props;

        let classNames = 'todo-list-item';
        if (important) { classNames += ' important' };
        if (completed) { classNames += ' completed' };

        let btnCompleteLabel = '';
        if (completed) { btnCompleteLabel = 'Revert' };
        if (!completed) { btnCompleteLabel = 'Complete' };

        return (
            <span className={classNames}>
                <span className="todo-list-item-content"
                    onClick={onToggleImportant}>
                    {content}
                </span>
                <div>
                    <button className="button-complete" onClick={onToggleCompleted}>{btnCompleteLabel}</button>
                    <button className="button-delete" onClick={onDeleted}>Delete</button>
                </div>
            </span>
        );
    }
}

