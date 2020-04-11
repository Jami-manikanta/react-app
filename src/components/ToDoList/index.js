/*global React*/
/*global ReactDOM*/
import React from 'react';
import './index.css';
import {observer} from 'mobx-react';
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="list-of-todos">
            <input onChange={()=>this.props.checkTodo(this.props.eachObj)} className="check-box" type="checkbox" checked={this.props.eachObj.todoCheckStatus}/>
            {this.props.checkStatus(this.props.eachObj)}
            <button onClick={()=>this.props.removeTodo(this.props.eachObj)} className="cancel">X</button>
          </div>;
    }
}
class TodoAppBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    clearCompleted = () => {
        if (this.props.numOfCompletedTodos > 0)
            return <button onClick={this.props.clearCompleted} className="delete-completed-todos">Clear completed</button>;
    }
    render() {
        return <div className="todos-app-bottom">
                    <p className="itemsLeft">items left:{this.props.numOfTodos}</p>
                        <div>
                            <button onClick={this.props.allTodos} className="all-todos">All</button>
                            <button onClick={this.props.active} className="present-todos">Active</button>
                            <button onClick={this.props.completed} className="completed-todos">Completed</button>
                        </div>
                        {this.clearCompleted()}
                </div>;
    }
    render() {
        return <div>
        <p className="todos-styles">todos</p>
        <input className="user-input-todo" onKeyPress={this.addTodoToTodosList} type="text" placeholder="What needs to be done?"/>   
        {this.renderTodosList()}
        {this.todosAppBottom()}
        </div>;
    }
}
//ReactDOM.render(<TodosList/>, document.getElementById('root'));
export default TodoList;