//import AuthenticationService from "../services/AuthentcationService";
//import { AuthenticationStore } from "./AuthenticationStore/index";
import AuthenticationService from '../services/AuthentcationService'
import AuthenticationStore from './AuthenticationStore'
//import AuthenticationService from "../services/AuthentcationService";

const authenticationService = new AuthenticationService()
const authenticationStore = new AuthenticationStore(authenticationService)
export { authenticationStore, authenticationService }
