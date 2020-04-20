import {observable} from 'mobx';
class ThemeStore{
    @observable selectedTheme
    constructor(){
        this.selectedTheme="Dark";
    }
    
    getCurrentTheme(){
        return this.selectedTheme;
    }
    
    setCurrentTheme(){
        if(this.selectedTheme==="Light"){
            this.selectedTheme="Dark";
        }else{
            this.selectedTheme="Light";
        }
    }
}

const themeStoreOne=new ThemeStore();

export default themeStoreOne;