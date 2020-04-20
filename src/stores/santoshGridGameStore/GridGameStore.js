import { observable, action } from "mobx";
import GridModel  from "../models/GridModel";
import GridGameJson from '../GridGameJson/GridGame.json';

class GridGamestore{
    @observable listOfGrid;
    @observable playerDetailsObject;
    @observable level;
    @observable toplevel;
    @observable cellsClickedCount;
    @observable isGameCompleted;
  
    @observable lives=0
    @observable userLoggined
    @observable playerName

    constructor(props){
        this.listOfGrid=[];
        this.playerDetailsObject=[]
        this.level=0;
        this.topLevel=0;
        this.cellsClickedCount=0;
        this.isGameCompleted=false
        this.lives=3;
        this.userLoggined=false

    }

    @action.bound 
    setGridCells(){
        this.listOfGrid=[]
        let {gridSize,hiddenCellCount} = GridGameJson[this.level];
        for(let i=0;i<(gridSize**2);i++){
            const object =new GridModel({
                id:1,
                isHidden:"",
            });
            if(i<hiddenCellCount){
                object.id="t";
                object.isHidden=true;
            }
            this.listOfGrid.push(object);
        }
        for(let i=this.listOfGrid.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [this.listOfGrid[i],this.listOfGrid[j]]=[this.listOfGrid[j],this.listOfGrid[i]]
        }
    }
    @action.bound
    inCreaseClickedCellCount(){
        this.level++;
    }
    @action.bound
    onCellClick(){
        this.cellsClickedCount+=1;
        if(this.cellsClickedCount===this.level+3){
            this.inCreaseClickedCellCount();
            this.cellsClickedCount = 0;
            this.setGridCells();
        }
        if(this.level===5){
            this.isGameCompleted=true;
        }
    }
    @action.bound
    onPlayAgainClick(){
        if(this.level>this.topLevel){
            this.topLevel = this.level;
        }
        this.resetgame();
        
    }

    @action.bound
    resetgame(){
        this.level=0;
        this.setGridCells();
        this.cellsClickedCount=0;
        this.isGameCompleted=false;
    }
    @action.bound
    decreaseLives(){
        this.lives-=1;
        if(this.lives===0){
            if(this.level>1){
                this.level-=1;
                this.lives=3
            }
            else{
                this.level=0;
                this.lives=3
            }
        }
        this.setGridCells();
        this.isGameCompleted=false;
    
    }
    @action.bound
    updatePlayerList(input){
        this.userLoggined=true;
        this.playerName=input.playerName
        this.playerDetailsObject.push(input);
        console.log(this.playerDetailsObject);
    }
    

}

const newGridStore = new GridGamestore()
export {newGridStore};