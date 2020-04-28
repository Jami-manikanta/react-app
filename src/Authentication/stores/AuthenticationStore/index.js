import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";
class AuthenticationStore{
     @observable getAuthenticationApiStatus
     @observable getAuthenticationApiError
     @observable user
     constructor(authenticationService){
         this.authenticationService=authenticationService;
         this.init();
     }
    
     init(){
        this.getAuthenticationApiStatus=API_INITIAL
        this.getAuthenticationApiError=null
     }


     @action.bound
     setAuthenticationAPIResponse(authenticationResponse){
       this.user=authenticationResponse;
     }
 
     @action.bound
     setAuthenticationAPIError(error){
          this.getAuthenticationApiError=error
     }
          @action.bound
          setAuthenticationAPIStatus(apiStatus){
                this.getAuthenticationApiStatus=apiStatus
          }
 
     @action.bound
     getAuthenticationAPI(){
        const authenticationPromise=this.authenticationService.getAuthenticationAPI()
       return bindPromiseWithOnSuccess( authenticationPromise)
         .to(this.getAuthenticationApiStatus,this.setAuthenticationAPIResponse)
         .catch(this.setAuthenticationAPIError)
     }
 
     @action.bound
     clearStore(){
         this.init()
     }
 
 
}
export default AuthenticationStore;