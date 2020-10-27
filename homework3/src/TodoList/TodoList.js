import React from 'react';

import TodoListItem from '../TodoListItem';


export default function TodoList({ todos, onDeleted, onToggleImportant, onToggleCompleted }) {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} >
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleCompleted={() => onToggleCompleted(id)}
                />
            </li>
        );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>

    );
};
