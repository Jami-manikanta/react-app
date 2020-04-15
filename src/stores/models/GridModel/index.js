import {observable} from 'mobx';

class GridModel{
    @observable isClicked=false;
    @observable isClickableGrid=false;
    
    constructor(props){
        this.isClickableGrid=props.isClickableGrid;
    }
}

export default GridModel;