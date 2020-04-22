import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";
import { action } from "mobx";

class UserService  {
    api
    constructor(){
        this.api=create({
            baseURL:'https://jsonplaceholder.typicode.com/'
        })
    }

    @action.bound
   getUsersAPI(){
    return networkCallWithApisauce(
        this.api,'users/',{},apiMethods.get
    )
   }
}
 
export default UserService;