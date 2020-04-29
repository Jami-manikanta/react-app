import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SizeButton from "../../styledComponents/SizeButtonComponentStyledComponents";
import { action, observable } from "mobx";

@inject("productStore")
@observer
class SizeButtonComponent extends Component {
    @observable isButtonClicked = false;

    @action.bound
    onSizesButtonClick() {
        const { productStore, value } = this.props;
        productStore.addSizeToSizeFilter(value);
        this.isButtonClicked
            ? (this.isButtonClicked = false)
            : (this.isButtonClicked = true);
    }
    render() {
        return (
            <SizeButton
                isButtonClicked={this.isButtonClicked}
                onClick={this.onSizesButtonClick}
            >
                {this.props.value}
            </SizeButton>
        );
    }
}

export default SizeButtonComponent;
