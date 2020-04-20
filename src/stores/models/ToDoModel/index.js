import { observable,action } from "mobx";
class TodoModel{
    todoId;
    @observable todoName;
    @observable todoIsCompleted;
    constructor(){
        this.todoId=props.todoId;
        this.todoName=props.todoName;
        this.todoIsCompleted=false;
    }
    
    @action.bound
    updateTodoName(updateTodoName){
        this.todoName=updateTodoName;
    }

    @action.bound
    checkOrUnCheckTheTodo(){
        if(this.todoIsCompleted===false){
            this.todoIsCompleted=true;
        }
        else{
            this.todoIsCompleted=false;
        }
    }

}


export default TodoModel;