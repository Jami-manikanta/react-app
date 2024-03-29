import React from 'react'
import { withRouter } from 'react-router-dom'
import { clearUserSession } from '../../../utils/StorageUtils'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import { inject, observer } from 'mobx-react'
import {
   ECommerceHeader,
   ECommerce,
   SignOut,
   ECommerceBody,
   CartButton
} from '../../styledComponents/ECommerceStyledComponents/index'
import SizesFilter from '../SizesFilter'
import ECommerceRightSideBody from '../ECommerceRightSideBody'
import { observable, action } from 'mobx'
import Cart from '../Cart'

@inject('productStore')
@observer
class ECommerceApp extends React.Component {
   @observable isboolean = false
   componentDidMount() {
      this.doNetworkCalls()
   }

   componentWillUnmount() {
      const { clearStore } = this.getProductStore()
      clearStore()
   }

   getProductStore() {
      return this.props.productStore
   }

   doNetworkCalls = () => {
      this.getProductStore().getProductsAPI()
   }

   onhandleSignOut = () => {
      const { history } = this.props
      history.replace('/sample-example')
      clearUserSession()
   }

   onCartClick = () => {
      if (this.isboolean) {
         this.isboolean = false
      } else {
         this.isboolean = true
      }
   }

   renderUsersList = () => {
      return (
         <ECommerce>
            <ECommerceHeader>
               <SignOut
                  type='button'
                  value='Sign-out'
                  onClick={this.onhandleSignOut}
               />
               <CartButton onClick={this.onCartClick}>
                  <AiOutlineShoppingCart className='w-10 h-10 ' />
               </CartButton>
            </ECommerceHeader>
            <ECommerceBody>
               <SizesFilter />
               <ECommerceRightSideBody />
            </ECommerceBody>
         </ECommerce>
      )
   }

   render() {
      const {
         getProductListApiStatus,
         getProductListApiError
      } = this.getProductStore()
      return (
         <div>
            {this.isboolean && <Cart onCartClick={this.onCartClick} />}
            <LoadingWrapperWithFailure
               apiStatus={getProductListApiStatus}
               apiError={getProductListApiError}
               onRetryClick={this.doNetworkCalls}
               renderSuccessUI={this.renderUsersList}
            />
         </div>
      )
   }
}
export default withRouter(ECommerceApp)
