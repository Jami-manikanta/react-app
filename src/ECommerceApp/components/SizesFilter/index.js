import React from 'react'
import { SizesFilterDiv,SizesButtons,SizesHeading,VerySmallSize,SmallSize,LargeSize,MediumSize,XlSize,XxlSize } from "../../styledComponents/SizesFilterStyledComponents";
import { action } from "mobx";
import { observer, inject } from "mobx-react";

@inject('productStore')
@observer
class SizesFilter extends React.Component{
     
    @action.bound
    handleClick(event){
        //alert(event.target.value)
        const {productStore}=this.props
        productStore.addSizeToSizeFilter(event.target.value);
    }
    render(){
        return(
            <SizesFilterDiv>
                 <SizesHeading>Sizes:</SizesHeading>
                 <SizesButtons>
                     <VerySmallSize value='XS' onClick={this.handleClick}>XS</VerySmallSize>
                     <SmallSize value='S' onClick={this.handleClick}>S</SmallSize>
                     <MediumSize value='M' onClick={this.handleClick}>M</MediumSize>
                     <LargeSize value='L' onClick={this.handleClick}>L</LargeSize>
                     <XlSize value='XL' onClick={this.handleClick}>XL</XlSize>
                     <XxlSize value='XXL' onClick={this.handleClick}>XXL</XxlSize>
                 </SizesButtons>
            </SizesFilterDiv>
        );
    }
}
export default SizesFilter;