import MenuMobile from "./modules/MenuMobile.js";
import SlideNav from "./modules/slidenav.js";
import DarkMode from "./modules/darkMode.js";
import LinkSmooth from "./modules/linkSmooth.js";
import Modal from "./modules/modal.js";

const menu = new MenuMobile('.toggle','.list-menu','.line');

menu.start()

const slide = new SlideNav('.slide','.slide-wrapper');

slide.init()


slide.addControl('.custom-control')

const dark = new DarkMode('#darkmode','#icon');

dark.start()

const link = new LinkSmooth('.list-menu li a');

link.start()


const modal = new Modal('.modal','.overlay','.btn-open','.btn-close');

modal.start()