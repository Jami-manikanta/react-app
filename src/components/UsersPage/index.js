import React from "react";
import {observer, inject} from 'mobx-react'
import LoadingWrapperWithFailure from "../../components/common/LoadingWrapperWithFailure";
//import usersStore from "../../stores/UsersStore";
import NoDataView from '../common/NoDataView';
//import stores from '../../stores/index.js';
//const usersStore=stores.usersStore;

@inject('usersStore')
@observer
class UsersPage extends React.Component {
    componentDidMount(){
        this.doNetworkCalls()
    }

    getUserStore=()=>{
        return this.props.usersStore;
    }

    doNetworkCalls=()=>{
        this.getUserStore().getUsersAPI()
    }

    renderUsersList=()=>{
        const {users}=this.getUserStore()
        if(users.length===0){
            return <NoDataView/>
        }
    return users.map((userName)=><div key={Math.random()}>{userName}</div>)
    }

    render() { 
        const {getUsersApiStatus,getUsersApiError}=this.getUserStore();
        return ( <LoadingWrapperWithFailure 
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
        /> );
    }
}
 
export default UsersPage;