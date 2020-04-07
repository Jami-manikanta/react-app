import React from 'react'

class Greetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',displayName:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    this.setState({displayName:'Hello  '+ this.state.value + ',  have a nice day!'});
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter the Name" />
        <input type="submit" value="Greet" />
        <p>{this.state.displayName}</p>
      </form> 
    );
  }
}
export default Greetings