import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import { create } from 'apisauce'
import { action } from 'mobx'

class AuthenticationService {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
      })
   }

   @action.bound
   getAuthenticationAPI() {
      return networkCallWithApisauce(this.api, 'v1/signin/', {}, apiMethods.get)
   }
}

export default AuthenticationService
