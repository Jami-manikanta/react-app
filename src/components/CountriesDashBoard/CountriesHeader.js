import  React from 'react';
 class CountriesHeader extends React.Component{
     //onChangeTheme=()=>{
             //const {onChangeTheme}=this.props;
            // onChangeTheme();
     //}
     render(){
         const {selectedTheme}=this.props;
         return(
             <div className="header-part">
                <h4>Where in the World?</h4>
               <p>
                 <span>&#x263e;</span>
                <span onClick={this.props.onChangeTheme}>{selectedTheme}</span>
               </p>
             </div>
             );
     }
 }
 
 export default CountriesHeader;