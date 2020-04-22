import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import todoStore from "../../../stores/TodoStore";

const UserInputField=styled.input`${tw`h-16 pl-4 text-3xl`};
width:'500px`;
class UserInput extends Component {
    state = { 
        userInput=''
     }
    onChangeUserInput=()=>{
        this.setState({
            userInput:event.target.value
        });
    }

    onSubmit=(event)=>{
        const {userInput}=this.state;
        this.setState({userInput:''});
        todoStore.addTodo(userInput);
        event.preventDefault();
    }

    render() { 
        const {userInput}=this.state;
        return ( 
            <form onSubmit={this.onSubmit}>
                <UserInputField type='text' value={userInput} placeholder='What Is Your Goal...' onChange={this.onChangeUserInput}/>
            </form>
         );
    }
}
 
export default UserInput;