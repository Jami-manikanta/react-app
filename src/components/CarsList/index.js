import React from 'react'
// Write your React Code here
/*global ReactDOM*/
/*global React*/
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={speed:0,status:"stopped"};
    }
    onStartOrStop=()=>{
        if(this.state.status==="stopped"){
            this.setState({status:"Running",speed:0});
            console.log(this.state.status);
        }
            
        else{
            this.setState({status:"stopped"});
              console.log(this.state.status);
        }
    }
    onApplyBrake=()=>{
        if(this.state.speed>0){
            this.setState({speed:this.state.speed-10});
            console.log(this.state.speed);}
    }
    onAccelerate=()=>{
        if(this.state.status==="Running"){
        this.setState({speed:this.state.speed+10});
        console.log(this.state.speed);
        }
    }
    displayStatusText=()=>{
       
    }
    render(){
            
     return(
           <div id={this.props.id}>
                <div className="carid-and-remove-button" id={this.props.id}>
                   <h2>{`Cars:${this.props.id}`}</h2>
                   <p className="remove-button " onClick={this.props.remove}>X</p>
                </div> 
                <div className="individual-cars"> 
                   <button className="button button1" onClick={this.onStartOrStop}>{this.state.status}</button>
                   <p>Status:<span>
                   {this.state.status==="stopped"?"Stopped":(this.state.speed>0)?`Running with speed ${this.state.speed} kmph`:"Running"}
                   </span></p>
                   <div className="speed-buttons">
                        <button className="button button3" onClick={this.onAccelerate}>Accelerate</button>
                        <button className="button button2" onClick={this.onApplyBrake} >Deaccelerate</button>
                   </div>
                </div>
            </div> 
   );
    }
}
let id=1;
class CarsList extends React.Component{
    constructor(){
        super();
        this.state={carsList:[id]};
         
    }
    addCarToCarsList=()=>{
        id=this.state.carsList[this.state.carsList.length-1];
        id=(isNaN(id)?0:id);
        console.log(id);
         this.setState({carsList:[...this.state.carsList,++id]});
         console.log(this.state.carsList)
        
    }
    removeCarToCarsList=(event)=>{
      let  index=(event.target.parentElement.id);
     
      this.setState({carsList:(this.state.carsList.filter((element)=>(element!=index))) });
    
    }
    renderCarsList=()=>{
        
    }
    render(){
        console.log("hi");
   return(
   <div>
        <div className="add-car-button">
            <button className="button button4" onClick={this.addCarToCarsList}>Add Car</button>
        </div>
       {this.state.carsList.map((carId) =>(<Car id={carId} remove={this.removeCarToCarsList} key={carId.toString()}/>))}
     </div>);
       }
}
export default  CarsList