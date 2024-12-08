import {container,content} from "../index"

export const aboutTab = () =>{
    const aboutMenu = {Title: "About The Cozy Corner",
        p:["The Cozy Corner is more than just a restaurant; it's a place where warm, homemade meals meet a cozy,inviting atmosphere. We're dedicated to serving up comfort food classics, elevated with a modern twist. From our hearty  soups to our decadent desserts, every dish is crafted with care, using fresh, quality ingredients.",
            " Our commitment to providing exceptional dining experiences extends beyond the food. Our friendly staff is always ready to welcome you with a smile and ensure your visit is memorable. Whether you're looking for a quick bite or a leisurely meal, The Cozy Corner is the perfect place to relax, unwind, and indulge."]
    }   
    const containerAbout = document.createElement("div");
    containerAbout.classList.add("containerAbout")
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("aboutUs")
    const createAbout = ()=>{
        const title = document.createElement("h2");
        const titleText = document.createTextNode(aboutMenu.Title)
        title.appendChild(titleText)

        const p1 = document.createElement("p");
        const p1Text = document.createTextNode(aboutMenu.p[0]);
        p1.appendChild(p1Text);
        
        const p2 = document.createElement("p");
        const p2Text = document.createTextNode(aboutMenu.p[1])
        p2.appendChild(p2Text);

        aboutUs.appendChild(title);
        aboutUs.appendChild(p1);
        aboutUs.appendChild(p2);
    }
    content.appendChild(container);
    container.appendChild(containerAbout);
    containerAbout.appendChild(aboutUs);
    createAbout()
}
