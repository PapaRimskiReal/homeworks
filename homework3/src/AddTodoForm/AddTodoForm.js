import React, { Component } from 'react';
import './AddTodoForm';

export default class AddTodoForm extends Component {


  render() {

    return (
      <div>
        
          <input placeholder="type here" />
          <button className="btn btn-outline-primary"
            onClick={() => this.props.addItem('new Task')}
          >Add</button>
        
      </div>
    )
  }
}

