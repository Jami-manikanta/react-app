import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import UserInput from './UserInput';
import TodoList from './TodoList';
import TodoFooter from "./TodoFooter";
import { observer, inject } from "mobx-react";
import NoDataView from "../common/NoDataView";
import LoadingWrapperWithFailure from "../../components/common/LoadingWrapperWithFailure";

const TodoAppHeading=styled.h1`${tw`text-pink-400 text-6xl`}`;
const TodoListAppWrapper=styled.div`${tw`flex flex-col justify-center items-center `};
margin:'300px'
`;

@inject('todoStore')
@observer
class TodoListApp extends React.Component {
    componentDidMount(){
        this.doNetworkCalls()
    }

    getTodoStore(){
        return this.props.todoStore;
    }

    doNetworkCalls=()=>{
        this.getTodoStore().getUsersAPI()
    }

    renderUsersList=()=>{
        const {todoList}=this.getTodoStore()
          return(  <TodoListAppWrapper>
            <TodoAppHeading>Todos</TodoAppHeading>
            <UserInput/>
            {todoList.length==0?<NoDataView/>:<TodoList/>}
            <TodoFooter/>
            </TodoListAppWrapper>);
    }

    render() { 
        const {getUsersApiStatus,getUsersApiError}=this.getTodoStore();
        return ( <LoadingWrapperWithFailure 
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
        /> );
    }
}
 
export default TodoListApp;
