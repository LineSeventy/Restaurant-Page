import "./style.css";
import {home} from "./Tabs/homeTab"
"use strict";

export const content = document.querySelector("#content");
export const container = document.createElement("div");
container.classList.add("container");
home();
