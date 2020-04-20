import { observable, action, computed } from "mobx";

class TodoStore{
    todoId;
    @observable todoList=[];
    @observable selectedFilterType='All';

    @action.bound
    addTodo(todoName){
        const TodoModelProps={
            todoId:this.todoId++,
            todoName
        };
        this.todoList.push(new TodoModel(TodoModelProps))
    }

    @action.bound
    removeTodo(todoId){
       this.todoList.splice(this.todoList.findIndex((eachTodo)=>eachTodo.todoId===todoId,1));
    }

    @action.bound
    updateSelectedFilterType(filterType){
       this.selectedFilterType=filterType;
    }


    @computed
    get filteredTodos(){
        let filteredTodos;
        if(this.selectedFilterType==='Active'){
            filteredTodos=this.todoList.filter((eachTodo)=>!eachTodo.todoIsCompleted);
        }else if(this.selectedFilterType==='Completed'){
            filteredTodos=this.todoList.filter((eachTodo)=>eachTodo.todoIsCompleted);
        }else{
            filteredTodos=this.todoList;
        }
        return filteredTodos;
    }

    @computed
    get todoCount(){
        return this.todoList.length;
    }

    TodosReaction=reaction(()=>this.todoList.map((todoModel)=>todoModel.todoName),
    (todoNames)={
         TodosReaction();
    }
    );
}

const todoStore=new TodoStore();
export default todoStore;