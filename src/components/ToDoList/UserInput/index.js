import todoStore from "../../../stores/TodoStore";

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