import React from 'react'
import SearchCountry from './SearchCountry.js'
import SearchRegion from './SearchRegion.js'
class CountriesFilterBar extends React.Component{
    render(){
        const {filterCountryRegion,filterCountry}=this.props;
        return(
        <div className="search-div">
           <SearchCountry filterCountry={filterCountry}/>
           <SearchRegion filterCountryRegion={filterCountryRegion}/>
        </div>);
    }
}
export default CountriesFilterBar