import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
class AddEvent extends React.Component{
    @observable eventName='';
    @observable eventLocation='';
    
    onAddEvent(){
         console.log('mani');
    }
    
    onChangeEventName(){
        
    }
    
    onChangeEventLoaction(){
        
    }
    
    render(){
        return(
           <div>
              <input type="text" placeholder='Event Name'/>
              <input type='text' placeholder='Event Loaction'/>
              <button onClick={this.onAddEvent}>Add Event</button>
           </div>
            
            )
            
        
    }
}
export default AddEvent;
