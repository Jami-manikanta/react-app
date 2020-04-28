import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {  spinner }  from '@fortawesome/fontawesome-free-solid';
class SampleExample extends React.Component {
    state = { 
          loading:false
     }

     onLoading=()=>{
         alert(1)
         this.setState({loading:true})
     }

    render() { 
        const {loading}=this.state
        return( 

           <button style={{backgroundColor:'blue',padding:'10px',margin:'40px'}} onClick={this.onLoading} disabled={loading}>
                

              {loading && <i className="fa fa-refresh"></i> } Login
              
           </button>
        );
    }
}
 
export default SampleExample;