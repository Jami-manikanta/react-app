/*global fetch*/
import React from 'react'
import CountriesHeader from './CountriesHeader.js'
import CountriesFilterBar from './CountriesFilterBar.js'
import CountryList from './CountryList.js'
class CountriesDashBoard extends React.Component{
    constructor(){
        super();
        this.state={
         countries:[],
         filterCountries:[],
        searchText:'',
        countriesList:'',
        selectedRegion:'All',
         selectedTheme:'Light Mode'
        }
    }
    componentDidMount=()=>{
      fetch('https://restcountries.eu/rest/v2/all').then(res=>res.json()).then(json=>{this.getCountries(json)});
    }
    
    onChangeTheme=(event)=>{
        if(this.state.selectedTheme==='Light Mode'){
            this.setState({selectedTheme:'Dark Mode',className:'dark-theme'})
        }
        else{
            this.setState({selectedTheme:'Light Mode',className:'light-theme'})
        }
    }
    
    filterCountryRegion=(region)=>{
            if(region==='All'){
                this.setState({filterCountries:this.state.countries,selectedRegion:'All'})
            }
            else{
               this.setState({
                   filterCountries:this.state.countries.filter(eachItem=>
                       eachItem.region===region
                   ),
                   selectedRegion:region
                   })
                }
            }
            
    filterCountry=(countryName)=>{
          const {countries,selectedRegion}=this.state;
          if(countryName===''){
              alert("Please select country");
          }
          else if(this.state.selectedRegion==='All'){
              countryName=countryName[0].toUpperCase()+countryName.slice(1,countryName.length);
              let filtered=countries.filter(country=>country.name.includes(countryName));
              //console.log(filtered);
              this.setState({filterCountries:filtered})
          }
          else{
              countryName=countryName[0].toUpperCase()+countryName.slice(1,countryName.length);
              let filtered=countries.filter(country=>country.name.includes(countryName) && (country.region===selectedRegion));
              //console.log(filtered);
              this.setState({filterCountries:filtered})
          }
    }
        
    getCountries=(json)=>{
        //console.log(json)
        this.setState({countries:json,filterCountries:json})
        //console.log(this.state.countries)
    }
    render(){
        return(
          <div className={this.state.className}>
            <CountriesHeader selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
            <CountriesFilterBar filterCountry={this.filterCountry} filterCountryRegion={this.filterCountryRegion}/>
            <CountryList displayCountries={this.state.filterCountries}/>
          </div>
            );
    }
}
export default CountriesDashBoard