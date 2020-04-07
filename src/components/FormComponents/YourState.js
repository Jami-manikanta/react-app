import React from 'react'

class YourState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',submittedState:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
        this.setState({submittedState:'I am from  '+ this.state.value });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="andhrapradesh">AndhraPradesh</option>
            <option value="tamilnadu">Tamilnadu</option>
            <option value="karnataka">Karnataka</option>
            <option value="Haryana">Haryana</option>
            <option value="kerala">kerala</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.submittedState}</p>
      </form>
    );
  }
}

export default YourState