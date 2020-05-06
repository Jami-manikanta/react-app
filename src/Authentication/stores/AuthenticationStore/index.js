import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";
class AuthenticationStore {
    @observable getAuthenticationApiStatus;
    @observable getAuthenticationApiError;
    @observable user;
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.init();
    }

    init() {
        this.getAuthenticationApiStatus = API_INITIAL;
        this.getAuthenticationApiError = null;
    }

    @action.bound
    setAuthenticationAPIResponse(authenticationResponse) {
        this.user = authenticationResponse;
    }

    @action.bound
    setAuthenticationAPIError(error) {
        this.getAuthenticationApiError = error;
    }
    @action.bound
    setAuthenticationAPIStatus(apiStatus) {
        this.getAuthenticationApiStatus = apiStatus;
    }

    @action.bound
    getAuthenticationAPI() {
        const authenticationPromise = this.authenticationService.getAuthenticationAPI();
        return bindPromiseWithOnSuccess(authenticationPromise)
            .to(
                this.getAuthenticationApiStatus,
                this.setAuthenticationAPIResponse
            )
            .catch(this.setAuthenticationAPIError);
    }

    @action.bound
    clearStore() {
        this.init();
    }
}
export default AuthenticationStore;

// import { observable, action } from "mobx";
// import { API_INITIAL } from "@ib/api-constants";
// import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

// import {
//     setAccessToken,
//     clearUserSession,
// } from "../../../../src/utils/StorageUtils";

// class AuthStore {
//     authAPIService;
//     @observable getUserSignInAPIStatus;
//     @observable getUserSignInAPIError;

//     constructor(authAPIService) {
//         this.authAPIService = authAPIService;
//         this.init();
//     }
//     init() {
//         this.getUserSignInAPIStatus = API_INITIAL;
//         this.getUserSignInAPIError = null;
//     }

//     @action.bound
//     setGetUserSignInAPIStatus(status) {
//         this.getUserSignInAPIStatus = status;
//     }

//     @action.bound
//     setGetUserSignInAPIError(error) {
//         this.getUserSignInAPIError = error;
//     }

//     @action.bound
//     setUserSignInAPIResponse(response) {
//         setAccessToken(response.length > 0 && response[0].access_token);
//     }

//     @action.bound
//     userSignIn(request, onSuccess, onFailure) {
//         const userSignInAPIPromise = this.authAPIService.signInAPI(request);
//         return bindPromiseWithOnSuccess(userSignInAPIPromise)
//             .to(this.setGetUserSignInAPIStatus, (response) => {
//                 this.setUserSignInAPIResponse(response);
//                 onSuccess();
//             })
//             .catch((error) => {
//                 this.setGetUserSignInAPIError(error);
//                 onFailure();
//             });
//     }

//     @action.bound
//     userSignOut() {
//         clearUserSession();
//         this.init();
//     }
// }

// export default AuthStore;
