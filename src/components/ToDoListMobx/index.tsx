/*global React*/
/*global ReactDOM*/
import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import './index.css';

type ToDoprops={
      checkTodo:any,
      eachObj:any,
      removeTodo:any,
      checkStatus:any
}


class Todo extends React.Component<ToDoprops>{
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

type TodoAppBottomprops={
    numOfCompletedTodos:any,
    clearCompleted:any,
    allTodos:any,
    active:any,
    completed:any,
    numOfTodos:any
    
}

class TodoAppBottom extends React.Component<TodoAppBottomprops> {
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
}
@observer class TodoList extends React.Component {
    
         @observable todoId:any = 0;
         @observable listOfTodos:any= [];
         @observable numOfItems:any= 0;
         @observable todoFooterState:any= "all";
         @observable numOfCompletedTodos:any= 0;
        
    @action.bound
    addTodoToTodosList(event){
        if (event.key === "Enter" && event.target.value != "") {
            this.numOfItems++;
            let updatedListOfTodos = this.listOfTodos.slice(0);
          //  console.log(updatedListOfTodos);
            updatedListOfTodos.push({ numOfTodos: this.todoId++, todo: event.target.value, todoCheckStatus: false, todoOnfocus: false });
           // console.log(updatedListOfTodos);
            event.target.value = "";
            this.listOfTodos= updatedListOfTodos ;
          //  console.log(this.listOfTodos);
        }
    }
    
        @action.bound
    todoCheckedOrNot(eachObj){
        console.log("eachObj.todoOnfocus", eachObj.todoOnfocus);
        const styles = { border: "2px solid grey" };
        if (eachObj.todoCheckStatus)
            return <input className="entered-todo-checked" type="text" defaultValue={eachObj.todo} disabled/>;
        else
            return <input  className="entered-todo-unchecked" onFocus={()=>this.onfocus(eachObj)} onBlur={()=>this.onfocus(eachObj)} type="text" defaultValue={eachObj.todo}/>;
    }
    
   // style={eachObj.todoOnfocus?styles:null}
    
        @action.bound
       checkTodo(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        console.log(index)
        if (eachObj.todoCheckStatus) {
            this.numOfItems++;
            this.numOfCompletedTodos--;
            dupList[index]["todoCheckStatus"] = false;
        }
        else {
            this.numOfItems--;
            this.numOfCompletedTodos++;
            dupList[index]["todoCheckStatus"] = true;
        }
       this. listOfTodos= dupList ;
    }
    
        @action.bound
    removeTodo(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        if (dupList[index].todoCheckStatus === false)
            this.numOfItems--;
        else
            this.numOfCompletedTodos--;
        dupList.splice(index, 1);
        //let newDupList = dupList.filter(eachEl => eachEl.numOfTodos != eachObj.numOfTodos)
         this.listOfTodos= dupList ;
    }
    @action.bound
    onfocus(eachObj){
        let dupList = this.listOfTodos.slice(0);
        let index = dupList.indexOf(eachObj);
        dupList[index].todoOnfocus = !dupList[index].todoOnfocus
        this. listOfTodos = dupList ;
    }
    
    @action.bound
    allTodos(){
        this.todoFooterState= "all" ;
    }
    @action.bound
    active(){
         this.todoFooterState= "active" ;
    }
    @action.bound
    completed(){
         this.todoFooterState= "completed";
    }
    @action.bound
    clearCompleted(){
        let dupList = this.listOfTodos.slice(0);
        let newDupList = dupList.filter(eachEl => eachEl.todoCheckStatus === false);
         this.listOfTodos=newDupList ;
    }
    
    @action.bound
    todosAppBottom(){
        if (this.listOfTodos.length > 0)
            return <TodoAppBottom numOfTodos={this.numOfItems} allTodos={this.allTodos} active={this.active} completed={this.completed} clearCompleted={this.clearCompleted} numOfCompletedTodos={this.numOfCompletedTodos}/>;
    }
    
    renderTodosList=()=>
    {
        let dupList = this.listOfTodos.slice(0);
        let newbtn = this.todoFooterState;
        let newDupList;
        switch (newbtn) {
            case "all":
                newDupList = dupList.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "active":
                let dupList1 = dupList.filter((eachEl => eachEl.todoCheckStatus === false));
                newDupList = dupList1.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
            case "completed":
                let dupList2 = dupList.filter((eachEl => eachEl.todoCheckStatus === true));
                newDupList = dupList2.map((eachtodo) => <Todo key={eachtodo.numOfTodos} eachObj={eachtodo} checkTodo={this.checkTodo} checkStatus={this.todoCheckedOrNot} removeTodo={this.removeTodo} onfocus={this.onfocus}/>);
                break;
        }
        return newDupList;
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