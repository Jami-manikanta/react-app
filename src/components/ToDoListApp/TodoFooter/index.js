import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import todoStore from "../../../stores/TodoStore";

@inject('todoStore')
@observer
class TodoFooter extends Component{

    onAllTodosButtonClick=(event)=>{
        const {updatedSelectedFilterType} = this.props.todoStore;
        updatedSelectedFilterType(event.target.value);
    }

    onActiveTodosButtonClick=(event)=>{
        const {updatedSelectedFilterType}=this.props.todoStore;
        updatedSelectedFilterType(event.target.value);
    }

    onCompletedTodosButtonClick=(event)=>{
        const {updatedSelectedFilterType}=this.props.todoStore;
        updatedSelectedFilterType(event.target.value);
    }

    onClearCompletedTodosButtonClick=(event)=>{
        const {updatedSelectedFilterType,removeClearCompleted}=this.props.todoStore;
        updatedSelectedFilterType(event.target.value);
        removeClearCompleted();
    }
  render(){
    const {todoList}=this.props.todoStore;
    if(todoList.length>0){
    return(
        <div>
            <span>TodosLeft:{todoList.length}</span>
            <button onClick={this.onAllTodosButtonClick} value='All'>All</button>
            <button onClick={this.onActiveTodosButtonClick} value='Active'>Active</button>
            <button onClick={this.onCompletedTodosButtonClick} value='Completed'>Completed</button>
            <button onClick={this.onClearCompletedTodosButtonClick} value='ClearCompleted'>ClearCompleted</button>
        </div>
    );
  }else{
      return "";
  }
  }
};
export default TodoFooter;