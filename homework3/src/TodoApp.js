import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import initialTodos from './initialTodos.js';
import ItemStatusFilter from './ItemStatusFilter';
import Marker from './Marker';
import { v4 as uuidv4 } from 'uuid';
import SearchPanel from './SearchPanel'

export default class TodoApp extends Component {

  state = {
    initialTodos: [
      this.createTodoItem('Create page structure'),
      this.createTodoItem('Add some styles'),
      this.createTodoItem('Add dynamic functionality'),
    ],
    term: '',
    filter: 'completed'
  };

  createTodoItem(content) {
    return {
      content,
      important: false,
      completed: false,
      id: uuidv4()
    };
  };

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

  onSearchInputChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.content.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter) {

    switch (filter) {
      case 'all':
        return items;
      case 'completed':
        return items.filter((item) => item.completed);
      case 'uncompleted':
        return items.filter((item) => !item.completed);
      default:
        return items;
    };
  };

  render() {

    const { initialTodos, term, filter } = this.state;
    const visibleItems = this.filter(this.search(initialTodos, term), filter);

    const completedItems = this.state.initialTodos.filter((el) => el.completed).length;
    const importantItemsLeft = this.state.initialTodos.filter((el) => el.important && !el.completed).length;
    const uncompletedItems = this.state.initialTodos.length - completedItems;

    return (
      <div>
        <Header />
        <Marker completed={completedItems} important={importantItemsLeft} uncompleted={uncompletedItems} />
        <main className="content-wrapper">
          <div className="top-panel d-flex">
            <SearchPanel
              onSearchInputChange={this.onSearchInputChange} />
            <ItemStatusFilter filter={filter}
              onFilterChange={this.onFilterChange} />
          </div>
          <TodoList todos={visibleItems}
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
