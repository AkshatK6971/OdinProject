import './styles.css'
import restaurantHomePage from './restaurant.js'
import createContact from './contact.js'
import createMenu from './menu.js';

restaurantHomePage();

let homebtn = document.querySelector("#home");
let menubtn = document.querySelector("#menu");
let contactbtn = document.querySelector("#contact");

homebtn.addEventListener("click", restaurantHomePage);
menubtn.addEventListener("click", createMenu);
contactbtn.addEventListener("click", createContact);