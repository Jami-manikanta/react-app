import { observable, action, computed,reaction } from "mobx";
import TodoModel from '../models/ToDoModel'
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";
class TodoStore{
    todoId = 0;
    @observable todoList=[];
    @observable selectedFilterType='All';
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable todoService

    constructor(todoService){
        this.todoService=todoService
        this.init();
    }

    init(){
        this.getUsersApiStatus=API_INITIAL
        this.getUsersApiError=null
        this.todoList=[]
        this.selectedFilterType='All'
    }


    @action.bound
    setUsersAPIResponse(usersResponse){
      // this.todoList=usersResponse.map((user)=>user.name)
      usersResponse.map((user)=>this.addTodo(user.title,user.completed))
    }

    @action.bound
    setUsersAPIError(error){
         this.getUsersApiError=error
    }
         @action.bound
         setUsersAPIStatus(apiStatus){
               this.getUsersApiStatus=apiStatus
         }

    @action.bound
    getUsersAPI(){
 //console.log(this.todoService);
 
        const todoPromise=this.todoService.getUsersAPI()
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
        .catch(this.setUsersAPIError)
    }

    clearStore(){
        this.init()
    }

    @action.bound
            addTodo(todoName,todoIsCompleted){
            const TodoModelProps={
            todoId:this.todoId++,
            todoIsCompleted,
            todoName
        };
        this.todoList.push(new TodoModel(TodoModelProps))
    }

    @action.bound
    removeTodo(todo){
       this.todoList.splice(this.todoList.indexOf(todo),1);
    }

    @action.bound
    updatedSelectedFilterType(filterType){
       this.selectedFilterType=filterType;
    }

    @action.bound
    removeClearCompleted(){
        this.todoList = this.todoList.filter((eachTodo)=>!eachTodo.todoIsCompleted);
    }

    @computed
    get filteredTodos(){
        let filteredTodos;
        if(this.selectedFilterType==='Active'){
            filteredTodos=this.todoList.filter((eachTodo)=>!eachTodo.todoIsCompleted);
        }else if(this.selectedFilterType==='Completed'){
            filteredTodos=this.todoList.filter((eachTodo)=>eachTodo.todoIsCompleted);
        } else{
            filteredTodos=this.todoList;
        }
        return filteredTodos;
    }

    @computed
    get todoCount(){
        return this.todoList.length;
    }

    TodosReaction=reaction(()=>this.todoList.map((todoModel)=>todoModel.todoName),
    (todoNames)=>{
        this.TodosReaction();
    }
    );
}

export default TodoStore;