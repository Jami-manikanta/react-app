import React from 'react';
class  extends Component {
    handleOnClick=()=>{
             const {todo,removeTodo}=this.props;
             removeTodo(todo.todoId);
    }

    checkOrUnCheckTodo=()=>{
        const {todo}=this.props;
        todo.isCompleted?(todo.isCompleted=false):(todo.isCompleted=true);
    }
      render() { 
        const {todo}=this.props;
        return ( 
            <form >
                <input type='checkbox' onClick={this.checkOrUnCheckTodo} isChecked={todo.isCompleted}/>
                <input type='text' value={todo.todoName}/>
                <input typ='button' onClick={this.handleOnClick} value='&times;'/>
            </form>
         );
    }
}
 
export default ;