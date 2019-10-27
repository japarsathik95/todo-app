import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const { todos } = state;
    console.log(todos);
    return { todoList: todos }
  }

class TodoList extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        title:'',

    }
}


render() {
    console.log(this.props.todoList);
    return (
        <React.Fragment>
        {this.props.todoList.length > 0 ?
        <div className="container">
            <h3>Todo List</h3>
            <div className="row">
                <div className="col-12">
                <ul>
                    {this.props.todoList.map((data,index) => {
                        return (
                            <li key={index}>{data.title}</li>
                        )
                    })}
                </ul>
                </div>
            </div>            
        </div> : '' }
        </React.Fragment>
    )
}
}

export default connect(mapStateToProps)(TodoList)