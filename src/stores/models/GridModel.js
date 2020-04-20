import { observable } from "mobx";

class GridModel{
    @observable id=0;
    @observable isHidden;
    @observable isWrong;
    constructor(){
        this.id=0;
        this.isWrong=true;
        this.isHidden="";
    }
}
export default GridModel;

