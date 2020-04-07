import React from 'react'
import BackButton from '../CountriesDashBoard/BackButton.js'
//import BackButton from './CountriesDashBoard/CountriesDashBoard.css'
import '../CountriesDashBoard/CountriesDashBoard.css'
class IndividualCountryTotalData extends React.Component{
    render(){
       const {IndividualItem,displayCountries} =this.props.location.state
       console.log(displayCountries);
       console.log(IndividualItem);
       let borderCountries=displayCountries.filter(eachCountry=>IndividualItem.borders.indexOf(eachCountry.alpha3Code)>-1)
        return(
          <div>
          
              <div>
                 <BackButton/>
              </div>
              
              <div className="total-country-data">
              
                  <div className="individual-padding">
                     <img className="navigation-img-size" src={IndividualItem.flag}/>
                  </div>
                  
                 <div>
        
                  <div className="individual-card-data-part">
                 <div>
                    <div>
                        <h4>{IndividualItem.name}</h4>
                    </div>
                     <p><b>Native Name:</b>{IndividualItem.nativeName}</p>
                     <p><b>Population:</b>{IndividualItem.population}</p>
                     <p><b>Region:</b>{IndividualItem.region}</p>
                     <p><b>Sub Region:</b>{IndividualItem.subregion}</p>
                     <p><b>Capital:</b>{IndividualItem.capital}</p>
                  </div>
                  
                 <div className="individual-padding-2">
                     <p><b>Top Level Domain:</b>{IndividualItem.topLevelDomain}</p>
                     <p><b>Currencis:</b>{IndividualItem.currencies.map(eachItem=>eachItem.name).join(',')}</p>
                     <p><b>Languages:</b>{IndividualItem.languages.map(eachItem=>eachItem.name).join(',')}</p>
                 </div>
                 
                  </div>
                  
                  <p className="borders-adjustment"><b>Borders Countries:</b><br/>{borderCountries.map(eachCountry=><button className="button button1">{eachCountry.name}</button>)}</p>

                  </div>
                  
              </div>
              
          </div>
      );
    }
}
export default IndividualCountryTotalData