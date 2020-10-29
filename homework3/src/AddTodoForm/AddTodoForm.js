import React, { Component } from 'react';
import './AddTodoForm.css';

export default class AddTodoForm extends Component {

  state = {
    label: ''
  };

  onInputLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  Submit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: ''
    });
  };

  render() {

    return (
      <div>
        <form className="d-flex"
          onSubmit={this.Submit}>
          <input type="text"
            placeholder="what needs to do"
            value = {this.state.label}
            className="addFormInput"
            onChange={this.onInputLabelChange} />
          <button className="btn btn-outline-primary"

          >Add</button>
        </form>
      </div>
    )
  }
}

