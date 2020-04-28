import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";
class ProductStore {
    @observable productList = [];
    @observable getProductListApiStatus;
    @observable getProductListApiError;
    @observable productApiService;
    @observable sizeFilter = [];
    @observable sortBy;

    constructor(productService) {
        this.productService = productService;
        this.init();
    }

    init() {
        this.productList = [];
        this.getProductListApiStatus = API_INITIAL;
        this.getProductListApiError = null;
        this.sizeFilter = [];
    }

    @action.bound
    addSizeToSizeFilter(value) {
        const index = this.sizeFilter.indexOf(value);
        if (index === -1) {
            this.sizeFilter.push(value);
            console.log(this.sizeFilter);
        } else {
            this.sizeFilter.splice(index, 1);
            console.log(this.sizeFilter);
        }
    }

    @action.bound
    setProductListAPIResponse(productsResponse) {
        productsResponse.map((eachProduct) =>
            this.productList.push(eachProduct)
        );
    }

    @action.bound
    setProductListAPIError(error) {
        this.getUsersApiError = error;
    }
    @action.bound
    setProductListAPIStatus(apiStatus) {
        this.getProductListApiStatus = apiStatus;
    }

    @action.bound
    getProductsAPI() {
        const productPromise = this.productService.getProductsAPI();
        return bindPromiseWithOnSuccess(productPromise)
            .to(this.setProductListAPIStatus, this.setProductListAPIResponse)
            .catch(this.setProductListAPIError);
    }

    @action.bound
    clearStore() {
        this.init();
    }

    @action.bound
    sortByMethod(value) {
        if (value === "Lowest To Highest") {
            this.productList = this.productList.sort(
                (a, b) => a.price - b.price
            );
        } else {
            this.productList = this.productList.sort(
                (a, b) => b.price - a.price
            );
        }
    }

    @computed
    get productsList() {
        if (this.sizeFilter.length !== 0) {
            return this.productList.filter((eachProduct) =>
                this.sizeFilter.find((eachSize) =>
                    eachProduct.availableSizes.includes(eachSize)
                )
            );
        } else {
            return this.productList;
        }
    }
}
export default ProductStore;
