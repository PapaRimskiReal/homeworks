import React from 'react';

import TodoListItem from '../TodoListItem';


export default function TodoList ({ todos }) {

    const elements = todos.map((item) => {
      const { id, ...itemProps } = item;
  
      return (
            <li key={id} >
                <TodoListItem {...itemProps} />
            </li>
        );
});

    return (
        <ul className="todo-list">
            {elements}
        </ul>

    );
};
