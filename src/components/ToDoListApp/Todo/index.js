import React from 'react';
import {observer} from 'mobx-react';
import TodoModel from '../../../stores/models/ToDoModel';

@observer
class Todo extends React.Component {
    removeTodo=()=>{
         const {removeTodo}=this.props;
         const {todo}=this.props;
       // console.log(this.props)
        removeTodo(todo);
    } 
        updateTodoName=(event)=>{
            const {updateTodoName}=this.props.todo;
            updateTodoName(event.target.value);
        }
    
    handleOnSubmit=(event)=>{
             event.preventDefault();
    }
    
    handleOnClick=()=>{
        const {checkOrUnCheckTodo}=this.props.todo;
        checkOrUnCheckTodo();
    }
   
      render() { 
        const {todoName,todoIsCompleted}=this.props.todo;
        return ( 
            <form style={{border:"1px solid red"}} onSubmit={this.handleOnSubmit} >
                <input type='checkbox' onChange={this.handleOnClick} checked={todoIsCompleted} />
                <input type='text' value={todoName} onChange={this.updateTodoName} disabled={todoIsCompleted}/>
                <input type='button' onClick={this.removeTodo} value='&times;'/>
            </form>
         );
    }
}
 
export default Todo;