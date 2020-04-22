import { observable,action } from "mobx";
class TodoModel{
    todoId;
    @observable todoName;
    @observable todoIsCompleted;
    constructor(props){
        this.todoId=props.todoId;
        this.todoName=props.todoName;
        this.todoIsCompleted=props.todoIsCompleted;
    }
    
    @action.bound
    updateTodoName(updateTodoName){
        this.todoName=updateTodoName;
    }

    @action.bound
    checkOrUnCheckTodo(){
        if(this.todoIsCompleted===false){
            this.todoIsCompleted=true;
        }
        else{
            this.todoIsCompleted=false;
        }
    }

}


export default TodoModel;