import React from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import { observable, action } from 'mobx'
import { withRouter } from 'react-router-dom'

//import { E_COMMERCE_PRODUCTS_PATH } from "../../../constants/RouteConstants";
//import { isLoggedIn } from "../../../utils/AuthUtils";

import SignInForm from '../../components/SignInForm'

@inject('authenticationStore')
@observer
class SignInRoute extends React.Component {
   @observable username = ''
   @observable password = ''
   @observable errorMessage = ''

   @action.bound
   onChangeUsername(e) {
      this.username = e.target.value
   }

   @action.bound
   onChangePassword(e) {
      this.password = e.target.value
   }

   // onEnterKeyPress = (e) => {
   //     if (e.key === "Enter") {
   //         this.onSubmitForm(e);
   //     }
   // };

   onSignInSuccess = () => {
      const { history } = this.props
      history.push(E_COMMERCE_PRODUCTS_PATH)
   }

   onSignInFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props.authenticationStore
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError
      }
   }

   onSubmitForm = e => {
      const { userSignIn } = this.props.authenticationStore
      console.log(userSignIn)
      e.preventDefault()
      if (this.username === '' || this.username === undefined) {
         this.errorMessage = 'Please enter username'
         return
      } else if (this.password === '' || this.password === undefined) {
         this.errorMessage = 'Please enter password'
         return
      } else {
         this.errorMessage = ''
         userSignIn(
            {
               username: this.username,
               password: this.password
            },
            this.onSignInSuccess,
            this.onSignInFailure
         )
      }
   }

   renderProductsPage = () => {
      return <Redirect to={E_COMMERCE_PRODUCTS_PATH} />
   }

   render() {
      const {
         authenticationStore: { getUserSignInAPIStatus }
      } = this.props
      // if (isLoggedIn()) {
      //     return this.renderProductsPage();
      // }
      const props = {
         apiStatus: getUserSignInAPIStatus,
         errorMessage: this.errorMessage,
         username: this.username,
         password: this.password,
         onChangeUsername: this.onChangeUsername,
         onChangePassword: this.onChangePassword,
         onSubmitForm: this.onSubmitForm,
         onEnterKeyPress: this.onEnterKeyPress
      }
      // alert(this.onSubmitForm);

      return <SignInForm {...props} />
   }
}

export default withRouter(SignInRoute)
