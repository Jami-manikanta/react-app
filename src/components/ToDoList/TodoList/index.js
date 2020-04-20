import todoStore from "../../../stores/TodoStore";

class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            let {filteredTodos,removeTodo}=todoStore;
            return filteredTodos.map((eachTodo)=><Todo key={eachTodo.todoId} todo={eachTodo} removeTodo={removeTodo} />)
         );
    }
}
 
export default TodoList;