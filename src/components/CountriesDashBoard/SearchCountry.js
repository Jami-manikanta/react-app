import React from 'react'
class SearchCountry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:''
        }
    }
    onHandleChange=(event)=>{
        this.setState({userInput:event.target.value})
    }
    onSubmit=(event)=>{
        event.preventDefault();
        this.props.filterCountry(this.state.userInput);
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
              <input type="text" className="search-input" onChange={this.onHandleChange} placeholder="Search the Country..."/>
           </form>
           );
    }
}
export default SearchCountry