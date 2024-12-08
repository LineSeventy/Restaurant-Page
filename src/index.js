import "./style.css";
import "./home.css";
import "./home.css";
import "./about.css";;
import {home} from "./homeTab";
import {menuTab} from "./menuTab";
import {aboutTab} from "./aboutTab";
"use strict";

export const content = document.querySelector("#content");
export const container = document.createElement("div");
container.classList.add("container");
let containerHome;
let containerMenu;
let containerAbout;
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
            const aboutBtn = document.querySelector(".aboutBtn");
            aboutBtn.addEventListener("click", () => {
              if  (container.contains(containerAbout)) {
                return; 
              }
              while (container.firstChild) {
                container.removeChild(container.firstChild);
              }
              aboutTab();     
              content.appendChild(container)

            })

            };
home();
systemChange();