class TodoListApp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Todos</h1>
                <UserInput/>
                <TodoList/>
            </div>
         );
    }
}
 
export default TodoListApp;