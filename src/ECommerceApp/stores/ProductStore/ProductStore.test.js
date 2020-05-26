import { API_INITIAL } from '@ib/api-constants'
import ProductStore from '.'
import ProductService from '../../services/ProductService'

describe('product Store tests', () => {
   const productService = new ProductService()
   const productStore = new ProductStore(productService)

   it('Should Test Store Is Initialised', () => {
      expect(productStore.getProductListApiStatus).toBe(API_INITIAL)
      expect(productStore.getProductListApiError).toBe(null)
   })

   //    it('Should Test API Status is Fetching', () => {
   //       expect(productStore.getProductsAPI()).toBe(Promise)
   //    })
})
