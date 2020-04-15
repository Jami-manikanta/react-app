import {observable,action,computed} from 'mobx';
import GridModel from '../models/GridModel';

class GridGameStore {
    @observable gridList=[];
    @observable gridSize=3;
    @observable level=0;
    @observable toplevel=0;
    
    
    constructor(){
        this.gridList();
    }
    
    @action.bound
    validateGrid(){
        let clickedGrid=this.gridList.filter((eachGrid)=>eachGrid.isClicked);
        if(clickedGrid.length===this.gridSize){
            this.increasedGridSize();
        }
    }
    @action.bound
    increasedGridSize(){
        ++this.gridSize;
    }
    
    @action.bound
    resetGrids(){
        if(this.level>this.toplevel)
         this.toplevel=this.level;
    }
    
    @computed
    get gridList(){
        this.gridList=[];
        for(let numberOfGrids=0;numberOfGrids<this.gridSize**2;numberOfGrids++){
            if(numberOfGrids%this.gridSize){
                this.gridList.push(new GridModel({isClickableGrid:true}));
            }
            else{
                 this.gridList.push(new GridModel({isClickableGrid:false}));
            }
            this.gridList.sort(()=>Math.random()-0.5);
            return this.gridList;
        }
    }
    
    
}
const gridGameStore=new GridGameStore();

export default  gridGameStore;