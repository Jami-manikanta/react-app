import AuthenticationService from "../services/AuthentcationService";
import AuthenticationStore from "./AuthenticationStore";

const authenticationService=new AuthenticationService();
const authenticationStore=new AuthenticationStore(authenticationService);
export default {
  authenticationStore
}
