import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";
import { action } from "mobx";

class TodoService  {
    api
    constructor(){
        this.api=create({
            baseURL:'https://jsonplaceholder.typicode.com/'
        })
    }

    @action.bound
   getUsersAPI(){
    return networkCallWithApisauce(
        this.api,'todos/',{},apiMethods.get
    );
   }
}
 
export default TodoService;