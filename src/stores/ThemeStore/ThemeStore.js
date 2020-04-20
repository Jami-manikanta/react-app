import {observable,action} from "mobx";


class ThemeStore{
    @observable selectedTheme;
    @observable object;
    constructor(){
        this.selectedTheme="light";
        this.object= {
            light:{
                name:"dark",
                background:"#1a202c",
                cellBackground:"#2a4365",
                hiddenCellBackground:"#10e6d0",
                color:"white"
            },
            dark:{
                name:"light",
                background:"white",
                cellBackground:"#616c7c",
                hiddenCellBackground:"#52ad7d",
                color:"black",
            }
        }   ;
    }
    @action.bound
    changeTheme(){
        if(this.selectedTheme==="light"){
            this.selectedTheme="dark"
        }
        else{
            this.selectedTheme="light"
        }
    }
}
const themeStore = new ThemeStore()
export  default themeStore;