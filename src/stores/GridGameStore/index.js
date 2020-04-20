import {observable,action,computed} from 'mobx';
import GridModel from '../models/GridModel/index';

class GridGameStore {
    @observable listOfGrids=[];
    @observable gridSize=3;
    @observable level=0;
    @observable toplevel=0;
    @observable isCompleted=false;
    @observable gridWidth=300;

    constructor(){
        this.gridList();
    }

    @action.bound
    validateGrid(gridModel){
    if(gridModel.isClickableGrid){
        if(this.clickedGridsLength===this.gridSize){
            setTimeout(()=>this.increasedGridSize(),500);
        }
    }else{
        this.toplevel=this.level>this.toplevel?this.level:this.toplevel;
        setTimeout(()=>this.resetGridGame(),500);
    }
    }

    @action.bound
    increasedGridSize(){
        ++this.gridSize;
        ++this.level;
        this.gridWidth+=50;
        this.gridList();
    }
    
    @action.bound
      resetGridGame(){
        this.listOfGrids=[];
        this.gridSize=3;
        this.toplevel=this.level>this.toplevel?this.level:this.toplevel;
        this.level=0;
        this.gridWidth=300;
        this.isCompleted=false;
        this.gridList();
    }
    @action.bound
     gridList(){
        let grids=[];
        for(let numberOfGrids=0;numberOfGrids<this.gridSize**2;numberOfGrids++){
            if(numberOfGrids%this.gridSize===0){
                grids.push(new GridModel({isClickableGrid:true}));
            }
            else{
                 grids.push(new GridModel({isClickableGrid:false}));
            }
        }
        this.listOfGrids=grids;
        this.sortTheGrids();
     }

    @action.bound
    sortTheGrids(){
        this.listOfGrids= this.listOfGrids.slice().sort(()=>Math.random()-0.5);
    }

    @computed
    get clickedGridsLength(){
        return this.listOfGrids.filter((eachGrid)=>eachGrid.isClicked).length;
    }
}
const gridGameStore=new GridGameStore();

export default  gridGameStore; 