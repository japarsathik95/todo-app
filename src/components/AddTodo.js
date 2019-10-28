import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addtodo = this.addtodo.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  addtodo(e) {
    e.preventDefault();
    if (this.state.title) {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Todo App</h3>
        <div className="row">
          <div className="col-6 offset-3">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Add todo list"
                aria-label="Add todo list"
                aria-describedby="button-addon2"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.addtodo}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
