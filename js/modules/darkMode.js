export default class DarkMode{
    constructor(inputEl,IconEl){
        this.inputEl= document.querySelector(inputEl);
        this.IconEl = document.querySelector(IconEl);
        this.inputEl.checked = JSON.parse(localStorage.getItem('mode'))
        this.bodyEl = document.querySelector('body');
        this.udpateBody = this.udpateBody.bind(this);
    };


    udpateBody(){
        if(this.inputEl.checked){
            this.bodyEl.style.backgroundColor = "#040C10";
            this.bodyEl.style.color="#8F8F8F";
            this.IconEl.classList.add('fa-moon');
        }else{
            this.bodyEl.style.backgroundColor = "#FFF";
            this.bodyEl.style.color="#000";
            this.IconEl.classList.replace('fa-moon','fa-sun');
        }

        this.udpateLocalStorage()
    };


    eventDarkMode(){
        this.inputEl.addEventListener('input',this.udpateBody)
    };


    udpateLocalStorage(){
        localStorage.setItem('mode',JSON.stringify(this.inputEl.checked))
    }


    start(){
        if(this.inputEl){
            this.eventDarkMode();
            this.udpateBody();
        }
    }
    
}