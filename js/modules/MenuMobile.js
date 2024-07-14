import outsideClick from "./outsideClick.js";
export default class MenuMobile{
    constructor(toggle,menu,icon){1
        this.toggle=document.querySelector(toggle);
        this.menu=document.querySelector(menu);
        this.icon=document.querySelector(icon);
        this.events=['click','touchstart'];
        this.activeClass='open';
        this.handleMenuMobile = this.handleMenuMobile.bind(this);
    }


    handleMenuMobile(event){
        if(event.type === "touchstart"){
            event.preventDefault();
        }

        this.menu.classList.add(this.activeClass);
        this.icon.classList.add(this.activeClass);

        outsideClick(this.menu,()=>{
            this.menu.classList.remove(this.activeClass);
            this.icon.classList.remove(this.activeClass)
        })

        
    };

    eventMobileMenu(){
        this.events.forEach((eventUser)=>{this.toggle.addEventListener(eventUser,this.handleMenuMobile)})
    };

    start(){
        if(this.menu){
            this.eventMobileMenu()
        }
    }
}