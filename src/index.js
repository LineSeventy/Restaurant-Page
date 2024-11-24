import "./style.css";
import {home} from "./Tabs/homeTab"
import {menu} from "./Tabs/menuTab"

export const content = document.querySelector("#content");
export const container = document.createElement("div");
export const img = document.createElement("div");
img.classList.add("img");

const system = () => {
    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", () => {
        home();
    })
}

export function stick() {
    content.appendChild(container);
    container.appendChild(img);
  } 

// menu(); 
system();