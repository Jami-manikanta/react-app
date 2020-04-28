import React from 'react';
import { withRouter } from "react-router-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import {
  LoginPageStyles,
  TotalLoginPage,
  SignInHeading,
  UserInput,
  Password,
  SignInButton
} from "../../styledComponents"

import { setAccessToken } from '../../../utils/StorageUtils'
import authenticationStore from "../../stores/index";



@observer
class LoginPage extends React.Component {
    @observable userInput=''
    @observable userPassword=''

    componentDidMount(){
      const {user}= authenticationStore
    }

        handleLogin=(event)=>{
          event.preventDefault()
      if(this.userInput!=='' && this.userPassword!=='' ){
        const {user}= authenticationStore;
        const {history}=this.props;
           history.replace('/ecommerce-app');
           setAccessToken(user);
      }     
      
    }
    @action.bound
    checkUserInput(event){
          this.userInput=event.target.value;
    }

    @action.bound
    checkPassword(event){
          this.userPassword=event.target.value;
   }
    render() { 
        return ( 
          <TotalLoginPage onSubmit={this.handleLogin}>
           <LoginPageStyles>
             <SignInHeading>Sign in</SignInHeading>
              <UserInput type='text' placeholder='Username' value={this.userInput} onChange={this.checkUserInput}/>
              <Password type='password' placeholder='Password' value={this.userPassword} onChange={this.checkPassword}/>
              <SignInButton type="submit" value='Sign In'/>
              <span></span>
           </LoginPageStyles>
           </TotalLoginPage>

         );
    }
}
 
export default withRouter(LoginPage);