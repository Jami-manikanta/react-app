import { observable } from "mobx";

class GridModel{
    @observable id=0;
    @observable isHidden;
    constructor(){
        this.id=0;
        this.isHidden="";
    }
}
export default GridModel;

