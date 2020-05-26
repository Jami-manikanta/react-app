import ProductStore from './ProductStore'
import ProductService from '../services/ProductService'
import CartStore from './CartStore'

const productService = new ProductService()
const productStore = new ProductStore(productService)
const cartStore = new CartStore()
export { productStore, cartStore }
