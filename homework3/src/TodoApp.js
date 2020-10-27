import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import initialTodos from './initialTodos.js';
import ItemStatusFilter from './ItemStatusFilter';
import Marker from './Marker';

export default class TodoApp extends Component {

  maxID = 100;

  state = {
    initialTodos: [
      this.createTodoItem('Create page structure'),
      this.createTodoItem('Add some styles'),
      this.createTodoItem('Add dynamic functionality'),
    ]
  };

  createTodoItem(content) {
    return {
      content,
      important: false,
      completed: false,
      id: this.maxID++
    }
  }

  deleteItem = (id) => {
    this.setState(({ initialTodos }) => {

      const idx = initialTodos.findIndex((el) => el.id === id);

      const before = initialTodos.slice(0, idx);
      const after = initialTodos.slice(idx + 1);
      const newArray = [...before, ...after];
      return {
        initialTodos: newArray
      }
    });
  };

  addItem = (text) => {

    const newItem = this.createTodoItem(text);


    this.setState(({ initialTodos }) => {

      const addTodoItemArray = [
        ...initialTodos, newItem
      ];

      return {
        initialTodos: addTodoItemArray
      }
    });
  };

  toggleProperty(arr, id, propName) {

    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const before = arr.slice(0, idx);
    const after = arr.slice(idx + 1);
    const newArray = [...before, newItem, ...after];
    return newArray
  }

  onToggleImportant = (id) => {

    this.setState(({ initialTodos }) => {
      return {
        initialTodos: this.toggleProperty(initialTodos, id, 'important')
      }

    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ initialTodos }) => {
      return {
        initialTodos: this.toggleProperty(initialTodos, id, 'completed')
      }
    });
  };


  render() {

    const completedItems = this.state.initialTodos.filter((el) => el.completed).length;
    const importantItems = this.state.initialTodos.filter((el) => el.important).length;
    const uncompletedItems = this.state.initialTodos.length - completedItems;

    return (
      <div>
        <Header />
        <Marker completed={completedItems} important={importantItems} uncompleted={uncompletedItems} />
        <main className="content-wrapper">
          <ItemStatusFilter />
          <TodoList todos={this.state.initialTodos}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleCompleted={this.onToggleCompleted}
          />
          <AddTodoForm
            addItem={this.addItem}
          />
        </main>
      </div >
    );
  };
};
