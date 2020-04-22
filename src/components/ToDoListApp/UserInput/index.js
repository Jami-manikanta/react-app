import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { inject, observer } from "mobx-react";
import { observable } from "mobx";

const UserInputField=styled.input`${tw`h-16 pl-4 text-3xl`};
width:'500px`;

@inject('todoStore')
@observer
class UserInput extends React.Component {
    
      @observable  userInput=''
     
    onChangeUserInput=(event)=>{
           this.userInput=event.target.value  
    }

    onSubmit=(event)=>{
        event.preventDefault();  
        this.props.todoStore.addTodo(this.userInput);
        this.userInput=''
    }

    render() { 
       // const {userInput}=this.state;
        return ( 
            <form onSubmit={this.onSubmit}>
                <UserInputField type='text' value={this.userInput} placeholder='What Is Your Goal...' onChange={this.onChangeUserInput}/>
            </form>
         );
    }
}
 
export default UserInput;