import "./style.css";

const displaySystem = () => {
    const content = document.querySelector("#content");
    const img = document.createElement("image");
    const details = document.createElement("div");
    
    content.appendChild(img);
    img.appendChild(details);
}

displaySystem();
console.log("This is a test")