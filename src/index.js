import "./style.css";

const displaySystem = () => {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("img");

    const img = document.createElement("img");

    const details = document.createElement("div");
    details.classList.add("details");

    container.appendChild(img);
    container.appendChild(details);
    content.appendChild(container)
}

displaySystem();
console.log("This is a test")