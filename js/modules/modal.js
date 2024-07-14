export default class Modal{
    constructor(modal,overlay,btnOpen,btnClose){
        this.modal=document.querySelector(modal);
        this.overlay = document.querySelector(overlay);
        this.btnOpen = document.querySelector(btnOpen);
        this.btnClose = document.querySelector(btnClose);
        this.classHidden = "hidden"
    }


    openModal(){
        this.modal.classList.remove(this.classHidden);
        this.overlay.classList.remove(this.classHidden)
    }

    closeModal(){
        this.modal.classList.add(this.classHidden);
        this.overlay.classList.add(this.classHidden)
    }

    keyDown(event){
        if(event.key === "Escape" && !this.modal.classList.contains(this.classHidden)){
            this.closeModal()
        }
    }


    eventModal(){
        this.btnOpen.addEventListener('click', this.openModal);
        this.btnClose.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click',this.closeModal)
        document.addEventListener('keydown', this.keyDown);
    }

    bindEvent(){
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    start(){
        if(this.modal){
            this.bindEvent();
            this.eventModal();
        }
    }
}