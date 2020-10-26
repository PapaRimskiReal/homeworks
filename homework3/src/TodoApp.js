import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import initialTodos from './initialTodos.js';
import ItemStatusFilter from './ItemStatusFilter';

function TodoApp() {
  return (
    <div>
      <Header />
      <main className="content-wrapper">
        <ItemStatusFilter />
        <TodoList todos={initialTodos} />
        <AddTodoForm />
      </main>
    </div>
  );
}

export default TodoApp;