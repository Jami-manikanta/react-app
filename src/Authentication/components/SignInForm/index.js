// import SignInForm from "./SignInForm";
// export default SignInForm;
import React from 'react'
import { withRouter } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'

import {
   LoginPageStyles,
   TotalLoginPage,
   SignInHeading,
   UserInput,
   Password,
   SignInButton
} from '../../styledComponents'

import { setAccessToken } from '../../../utils/StorageUtils'
import authenticationStore from '../../stores/index'

@inject('authenticationStore')
@observer
class LoginPage extends React.Component {
   @observable userInput = ''
   @observable userPassword = ''
   @observable errorMessage = ''

   componentDidMount() {
      const { user } = authenticationStore
   }

   handleLogin = event => {
      event.preventDefault()
      if (this.userInput !== '' && this.userPassword !== '') {
         const { user } = authenticationStore
         const { history } = this.props
         history.replace('/ecommerce-app')
         setAccessToken(user)
      }
      if (this.userInput === '' || this.userInput === undefined) {
         this.errorMessage = 'Please enter username'
         return
      } else if (this.userPassword === '' || this.userPassword === undefined) {
         this.errorMessage = 'Please enter password'
         return
      } else {
         this.errorMessage = ''
      }
   }
   @action.bound
   checkUserInput(event) {
      this.userInput = event.target.value
   }

   @action.bound
   checkPassword(event) {
      this.userPassword = event.target.value
   }
   render() {
      return (
         <TotalLoginPage onSubmit={this.handleLogin}>
            <LoginPageStyles>
               <SignInHeading>Sign in</SignInHeading>
               <UserInput
                  type='text'
                  placeholder='Username'
                  value={this.userInput}
                  onChange={this.checkUserInput}
               />
               <Password
                  type='password'
                  placeholder='Password'
                  value={this.userPassword}
                  onChange={this.checkPassword}
               />
               <SignInButton type='submit' value='Sign In' />
               {/* {this.errorMessage !== "" && errorMessage !== undefined ? ( */}
               <span className='text-red-700 mt-2 -mt-3 w-48 text-sm'>
                  {this.errorMessage}
               </span>
            </LoginPageStyles>
         </TotalLoginPage>
      )
   }
}

export default withRouter(LoginPage)
