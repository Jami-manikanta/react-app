import React from 'react'
class VisitedCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitedCities:[],
      requiredStates:false,
      selectedCities:[],
      cityOptions:['Hyderabad','Chennai','pune','Bangalore','Mumabi','Delhi']
    }; 
  }
    
   handleCheckboxClick=(event)=>{
      console.log(event.target.checked)
      if(event.target.checked){
        this.setState({
          selectedCities:[...this.state.selectedCities,event.target.value],
        })
      }
      else{
        const updated = this.state.selectedCities.filter(eachItem=>{
          return eachItem!=event.target.value
        })
        this.setState({selectedCities:updated})
      }
    }
    handleSubmit=()=>{
           this.setState({requiredStates:true,visitedCities:`I have visited these cities ${this.state.selectedCities}.`})
    }
    
    visitedCitiesResult=()=>{
       return  <p>{this.state.visitedCities}</p>
    }
    
    displayVisitedCitiesMessage=()=>{
       let x= this.state.cityOptions.map(eachCity=>{
        return(<div>
            <input type="checkbox" value={eachCity} onChange={this.handleCheckboxClick}/>
            {eachCity}
         </div>);
       }
         );
         return x;
  }
  
  render() {
    return (
      <div>
     <p>Which of the following have selected cities?</p>
     <form>
       {this.displayVisitedCitiesMessage()}
     </form>
     <button onClick={this.handleSubmit}>Make Your Choice</button>
      {( this.state.requiredStates===true && this.visitedCitiesResult())}
     </div>
    );
  }
}

export default VisitedCities