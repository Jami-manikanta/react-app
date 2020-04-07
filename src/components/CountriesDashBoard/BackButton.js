import React from 'react'
import {withRouter} from 'react-router-dom'
class BackButton extends React.Component{
    handleClick=()=>{
        let {history}=this.props;
         history.goBack();
    }
    render(){
        return(
            <div>
               <button className="button button1" onClick={this.handleClick}>Back</button>
            </div>
            );
    }
}
 export default withRouter(BackButton);