import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit = (e) => {
      const { title } = this.state;
      const { addTodoProps } = this.props;
      e.preventDefault();
      if (title.trim()) {
        addTodoProps(title);
        this.setState({
          title: '',
        });
      } else {
        alert('Please Add a new Todo');
      }
    };

    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Add Todo..."
            value={title}
            name="title"
            onChange={this.onChange}
            className="input-text"
          />
          <button type="button" className="input-submit">Submit</button>
        </form>
      );
    }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
