import React from 'react'
import {withRouter} from 'react-router-dom'

class IndividualCountry extends React.Component{
    onHandleChange=()=>{
        const {IndividualItem,history,displayCountries}=this.props;
        history.push(`country-dashboard-app/${IndividualItem.alpha3Code}`,{IndividualItem,displayCountries});
    }
    
    render(){
        const {IndividualItem}=this.props;
        return(
            <div onClick={this.onHandleChange} className="individual-countries">
                <div className="individual-country-div">
                    <img src={IndividualItem.flag} className="individual-countries-img"/>
                </div>
               <div className="individual-country-css">
                   <div className="country-name-css">
                    <h4>{IndividualItem.name}</h4>
                   </div>
                   <div>
                    <p><b>Population:</b></p>
                    <p>{IndividualItem.population}</p>
                    <p><b>Capital:</b>{IndividualItem.capital}</p>
                    <p><b>Region:</b>{IndividualItem.region}</p>
                </div>
               </div>
           </div>
            );
    }
}
export default withRouter(IndividualCountry)