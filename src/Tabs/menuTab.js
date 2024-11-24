import{container, content, img, stick} from "../index"

export const menu = () => {

    const blur = document.createElement("div")
    blur.classList.add("blur")
    stick();

    img.appendChild(blur)
    blur.appendChild(recipes)
}