import React from 'react'
import BodyHeader from "../BodyHeader";
import { ECommereceBody } from "../../styledComponents/ECommerceRightSideBodyStyledComponents";
import ProductList from "../ProductList";
class ECommerceRightSideBody extends React.Component{
    render(){
        return(
          <ECommereceBody>
           <BodyHeader/>
          <ProductList/> 
          </ECommereceBody>
        );
    }
}
export default ECommerceRightSideBody;