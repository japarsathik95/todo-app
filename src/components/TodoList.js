import React from "react";
import { connect } from "react-redux";
import { deleteTodo, completeTodo } from "../actions/action";

const mapStateToProps = state => {
  const { todos } = state;
  return { todoList: todos };
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteitem = this.deleteitem.bind(this);
    this.completeitem = this.completeitem.bind(this);
  }

  deleteitem(id) {
    this.props.deleteTodo(id);
  }

  completeitem(id) {
    this.props.completeTodo(id);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.todoList.length > 0 ? (
          <div className="container">
            <h3>Todo List</h3>
            <div className="row">
              <div className="col-6 offset-3">
                {this.props.todoList.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        data.completed
                          ? "alert alert-danger"
                          : "alert alert-success"
                      }
                      role="alert"
                    > {!data.completed ?
                      <img
                        onClick={this.completeitem.bind(this, data.id)}
                        className="icon-complete"
                        src="https://img.icons8.com/material/24/000000/checked-2--v2.png"
                        alt="Mark as complete"
                        title="Mark as complete"
                      /> :
                      <img
                        className="icon-complete"
                        src="https://img.icons8.com/material/24/000000/checkmark--v2.png"
                        alt="Marked as completed"
                        title="Marked as completed"
                    /> }
                      {data.title}

                      {!data.completed ? (
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                          onClick={this.deleteitem.bind(this, data.id)}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  { deleteTodo, completeTodo }
)(TodoList);
