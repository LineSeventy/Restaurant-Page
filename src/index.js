import "./CSS/style.css";
import "./CSS/home.css";
import "./CSS/menu.css"
import {home} from "./Tabs/homeTab"
import {menuTab} from "./Tabs/menuTab"
"use strict";

export const content = document.querySelector("#content");
export const container = document.createElement("div");
container.classList.add("container");
let containerHome;
let containerMenu;
const systemChange = () =>{
    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", ()=> {
       if  (container.contains(containerHome)) {
            return; 
          }
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          home();     
          content.appendChild(container);})

        const menuBtn = document.querySelector(".menuBtn");
        menuBtn.addEventListener('click', ()=>{
            if  (container.contains(containerMenu)) {
                return; 
              }
              while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
              menuTab();     
              content.appendChild(container)
            })
            };
            
systemChange();