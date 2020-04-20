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
        this.listOfGrid=[];
        this.resetSelectedCellsCount();
        let {gridSize,hiddenCellCount} = GridGameJson[this.level];
        for(let i=0;i<(gridSize**2);i++){
            const object =new GridModel({
                id:1,
                isHidden:false,
                isWrong:true,
            });
            if(i<hiddenCellCount){
                object.id="t";
                object.isWrong=false
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
    gotonextlevelandUpdatCells(){
        this.level++;
        this.setGridCells();
    }
    @action.bound
    onCellClick(){
        this.incrementSelectedCellsCount();
        if(this.cellsClickedCount===this.level+3){
            this.gotonextlevelandUpdatCells();   
        }
        if(this.level===1){
            this.isGameCompleted=true;
        }
    }
    @action.bound
    incrementSelectedCellsCount(){
        this.cellsClickedCount+=1;
    }
    @action.bound
    resetSelectedCellsCount(){
        this.cellsClickedCount=0;
    }
    @action.bound
    onPlayAgainClick(){
        this.setToplevel();
        this.level=0;
        
        this.resetgame();
    }
    @action.bound 
    goToInitialLevel(){
        this.level=0;
        this.resetSelectedCellsCount();
    }

    @action.bound
    resetgame(){
        if(this.lives===0){
            this.goToInitialLevel()
        }
        this.setGridCells();
        this.resetSelectedCellsCount()
        this.isGameCompleted=false;
    }
    @action.bound
    setToplevel(){
        if(this.level>this.topLevel){
            this.topLevel = this.level;
        }
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
    }
    

}

const newGridStore = new GridGamestore()
export {newGridStore};


// onClickCell
// setGridCells
// gotonextlevelandUpdatCells
// gotoInitialLevelAndUpdateCels
// resetSelectedCellsCount
// incrementSelectedCellsCount
// onPlayAgainClick
// resetgame
// setToplevel

// if(this.level>0){
//     this.level--;
//     this.lives--;
// }