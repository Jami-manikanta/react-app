import React from 'react'
class DisableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isDisable:false,
       showMessage:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if(this.state.isDisable===true){
        this.setState({isDisable:false,showMessage:''})
     }
     else{
         this.setState({isDisable:true,showMessage:'Button is Disabled'})
     }
  }
  handleSubmit=(event)=> {
     this.setState({isDisable:false,showMessage:'Button is Enabled'})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Disabled:
          <input
            name="Disabled"
            type="checkbox"
            checked={this.state.isDisable}
            onChange={this.handleInputChange} />
        </label>
          <input type="submit" disabled={this.state.isDisable}/>
          <p>{this.state.showMessage}</p>
      </form>
    );
  }
}

export default DisableButton