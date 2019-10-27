import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action'

class AddTodo extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        title:'', 
    }
    this.handleChange = this.handleChange.bind(this);
    this.addtodo = this.addtodo.bind(this);
}

handleChange(e) {
    this.setState({title:e.target.value});
}

addtodo(e) {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    console.log(this.state.title);
    this.setState({title:''});
}

render() {
    return (
        <div className="container">
            <h3>Todo App</h3>
            <div className="row">
                <div className="col-12">
                <input type="text" value={this.state.title} onChange={this.handleChange}/>
                <input type='button' value='Add' onClick={this.addtodo} />
                </div>
            </div>            
        </div>
    )
}
}

export default connect(null, {addTodo})(AddTodo);