import React from 'react'
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import { SortByDropDownButton } from "../../styledComponents/ProductSortStyledComponents";

@inject('productStore')
@observer
class ProductSort extends React.Component{
 @observable value='select'

   @action.bound
   handleChange(event){
       this.value=event.target.value;
      this.props.productStore.sortByMethod(this.value);
   }
    render(){
           return(
              <label>
                 Sort Price By:
                <SortByDropDownButton value={this.value} onChange={this.handleChange}>
                <option value="Lowest To Highest">Lowest To Highest</option>
                <option value="Highest To Lowest">Highest To Lowest</option>
                </SortByDropDownButton>
            </label>
           ); 
    }
}
export default ProductSort;

