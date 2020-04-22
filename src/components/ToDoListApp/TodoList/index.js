import React from 'react';
import { observer, inject } from "mobx-react";
import Todo from '../Todo'

@inject('todoStore')
@observer
class TodoList extends React.Component {  
    render() {  
            let {filteredTodos,removeTodo}=this.props.todoStore;
            return filteredTodos.map((eachTodo)=><Todo key={Math.random()} todo={eachTodo} removeTodo={removeTodo} />)        
    }
} 
export default TodoList;