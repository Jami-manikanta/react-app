import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import UserInput from './UserInput';
import TodoList from './TodoList';

const TodoAppHeading=styled.h1`${tw`text-pink-400 text-6xl`}`;
const TodoListAppWrapper=styled.div`${tw`flex flex-col justify-center items-center `};
margin:'300px'
`;

class TodoListApp extends Component {
    state = {  }
    render() { 
        return ( 
            <TodoListAppWrapper>
                <TodoAppHeading>Todos</TodoAppHeading>
                <UserInput/>
                <TodoList/>
            </TodoListAppWrapper>
         );
    }
}
 
export default TodoListApp;