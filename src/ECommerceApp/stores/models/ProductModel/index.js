class ProductModel{
    productId;
    availableSizes=[];
    currencyFormat;
    currencyId;
    description;
    installmentCounts;
    isfreeShipping;
    price;
    printStyles;
    title;
    image='';
    constructor(props){
        this.productId=props.productId,
        this.availableSizes=props.availableSizes,
        this.currencyFormat=props.currencyFormat,
        this.currencyId=props.currencyId,
        this.description=props.description,
        this.installmentCounts=props.installmentCounts,
        this.isfreeShipping=props.isfreeShipping,
        this.price=props.price,
        this.printStyles=props.printStyles,
        this.title=props.title;
        this.image=props.image,
    }
}
export default ProductModel;