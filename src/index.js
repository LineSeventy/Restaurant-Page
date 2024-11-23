import "./style.css";
import {home} from "./Tabs/homeTab"
import {menu} from "./Tabs/menuTab"

const system = () => {
    const homeBtn = document.querySelector(".homeBtn");
    homeBtn.addEventListener("click", () => {
        home();
    })
}

menu();
system();