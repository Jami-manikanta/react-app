import React from 'react'
import IndividualCountry from './IndividualCountry.js'
class CountryList extends React.Component{
    render(){
        const {displayCountries}=this.props;
      return(  <div className="display-countries">
        {displayCountries.map(eachCountry=>
            <IndividualCountry key={eachCountry.index} displayCountries={displayCountries} IndividualItem={eachCountry}/>
        )}
        </div>);
    }
}
export default CountryList