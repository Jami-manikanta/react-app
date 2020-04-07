import React from 'react'
class FavouriteDeserts extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {selectedDessert: '',FavouriteDessert:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({selectedDessert: event.target.value});
  }

  handleSubmit(event) {
    this.setState({FavouriteDessert:'My Favourite Dessert is: '+ this.state.selectedDessert});
    event.preventDefault();
  }
  
  renderDessertOptions=()=>{
      
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <h3>What is your Favourite Desert </h3>
         
          <input type="radio"
               value="Vanilla"
               checked={this.state.selectedDessert === "Vanilla"}
               onChange={this.handleChange} />Vanilla

        <input type="radio"
               value="ButterScotch"
               checked={this.state.selectedDessert === "ButterScotch"}
               onChange={this.handleChange}/>ButterScotch
               
        <input type="radio"
               value="Gulab Jamun"
               checked={this.state.selectedDessert === "Gulab Jamun"}
               onChange={this.handleChange}/>Gulab Jamun
               
               
        <input type="radio"
               value="Yoghurt Pots"
               checked={this.state.selectedDessert === "Yoghurt Pots"}
               onChange={this.handleChange}/>Yoghurt Pots
               
        <input type="radio"
               value="Baked Banana"
               checked={this.state.selectedDessert === "Baked Banana"}
               onChange={this.handleChange}/>Baked Banana
               
               
        <input type="radio"
               value="Chocolate"
               checked={this.state.selectedDessert === "Chocolate"}
               onChange={this.handleChange}/>Chocolate
               
          <input type="submit" value="Make Your Choice" />
        <p>{this.state.FavouriteDessert}</p>
      </form> 
    );
  }

}
export default FavouriteDeserts