import { observable, action } from "mobx";
import { API_INITIAL,API_FAILED,API_SUCCESS,API_FETCHING } from "@ib/api-constants";
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils.js';
import {apiMethods} from '../../constants/APIConstants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import UserService from '../../services/UserService/index.fixture';

class UsersStore  {
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService

    constructor(userService){
        this.userService=userService;
        this.init();
    }

    @action.bound
    setUsersAPIResponse(usersResponse){
       this.users=usersResponse.map((user)=>user.name)
      // this.getUsersApiStatus=API_SUCCESS
    }
     
    @action.bound
    setUsersAPIError(error){
         this.getUsersApiError=error
      //   this.getUsersApiStatus=API_FAILED
    }

    @action.bound
    setUsersAPIStatus(apiStatus){
          this.getUsersApiStatus=apiStatus
    }
    @action.bound
    getUsersAPI(){
        const usersPromise=this.userService.getUsersAPI()
       /* const api=create({
            baseURL:'https://jsonplaceholder.typicode.com'
        })
        const usersPromise=networkCallWithApisauce(
            api,'users/',{},apiMethods.get
        )*/
        

      //  const usersPromise=fetch('https://jsonplaceholder.typicode.com/users')
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
        .catch(this.setUsersAPIError)

      //  this.getUsersApiStatus=API_FETCHING
       // fetch('https://jsonplaceholder.typicode.com/users')
      //  .then((res)=>res.json())
       // .then(this.setUsersAPIResponse)
      //  .catch(this.setUsersAPIError)
    }

    init(){
        this.getUsersApiStatus=API_INITIAL
        this.getUsersApiError=null
        this.users=[]
    }
    
    clearStore(){
        this.init()
    }
}


//const userService=new UserService();
//const usersStore=new UsersStore(userService);
export default UsersStore;

