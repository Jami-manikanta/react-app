import { networkCallWithApisauce } from "../../../utils/APIUtils";
import { apiMethods } from "../../../constants/APIConstants";
import { create } from "apisauce";
import { action } from "mobx";


class ProductService {
    api
    constructor(){
        this.api=create({
            baseURL:'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        })
    }

    @action.bound
   getProductsAPI(){
    return networkCallWithApisauce(
        this.api,'v1/products/',{},apiMethods.get
    );
   }
}

export default ProductService;