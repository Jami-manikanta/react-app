import React from 'react'
class SearchRegion extends React.Component{
    selectedRegion=(event)=>{
        this.props.filterCountryRegion(event.target.value);
    }
    render(){
        return(
          <select onChange={this.selectedRegion}>
                           <option value="All">All</option>
                           <option value="Africa">Africa</option>
                           <option value="Americas">Americas</option>
                           <option value="Asia">Asia</option>
                           <option value="Europe">Europe</option>
                           <option value="Oceania">Oceania</option>
          </select>);
    }
}
export default SearchRegion