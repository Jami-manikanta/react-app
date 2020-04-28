import React from "react";
import ProductSort from "../ProductSort";
import { ECommerceBodyHeader } from "../../styledComponents/BodyHeaderStyledComponents";
import { inject, observer } from "mobx-react";

@inject("productStore")
@observer
class BodyHeader extends React.Component {
    render() {
        const { productsList } = this.props.productStore;
        return (
            <ECommerceBodyHeader>
                <span>{productsList.length} Product(s) Found.</span>
                <ProductSort />
            </ECommerceBodyHeader>
        );
    }
}
export default BodyHeader;
