import {content,container} from "./index"
"use strict"


export const home = () => {

   const containerHome = document.createElement("div");
   containerHome.classList.add("containerHome");
   if(containerHome){
   const createCard = (contentType, contentData) => {

      const card = document.createElement("div");
      card.classList.add(contentType);
      


      const title = document.createElement("h3"); 
      title.textContent = contentData.title;
      card.appendChild(title);
      

      if (contentType === "description") {
         const desc = document.createElement("p");
         desc.textContent = contentData.content;
         card.appendChild(desc);

      } else if (contentType === "schedule") {

         contentData.dates.forEach(date => {
            const desc = document.createElement("p");
            desc.textContent = date;
            card.appendChild(desc);
         });

      } else if (contentType === "contact") {

         const address = document.createElement("p");
         address.textContent = contentData.address;
         card.appendChild(address);
   
         const email = document.createElement("p");
         email.textContent = contentData.mail;
         card.appendChild(email);
   
         const socialTitle = document.createElement("h3");
         socialTitle.textContent = contentData.title2;
         card.appendChild(socialTitle);
   
         const instagram = document.createElement("p");
         instagram.textContent = contentData.instagram;
         card.appendChild(instagram);
   
         const fb = document.createElement("p");
         fb.textContent = contentData.fb;
         card.appendChild(fb);
      }


      containerHome.appendChild(card);
      container.appendChild(containerHome);
      content.appendChild(container);
   }
   
   const contentHome = {
     description: {
       title: "Description",
       content: "Step into The Cozy Corner, where warm, rustic charm meets modern culinary delights. Our menu features classic comfort food elevated with fresh, seasonal ingredients. From hearty soups to mouthwatering desserts, every dish is crafted with love and care."
     },
     schedule: {
       title: "Schedule",
       dates: [
         "Monday - Thursday: 11:00 AM - 9:00 PM",
         "Friday - Saturday: 11:00 AM - 10:00 PM",
         "Sunday: 10:00 AM - 8:00 PM"
       ]
     },
     contact: {
       title: "Contact Us",
       address: "Address: [Your Restaurant Address]",
       mail: "Email: [Your Restaurant Email]",
       title2: "Social Media",
       instagram: "Instagram: [@yourrestaurantinstagramhandle]",
       fb: "Facebook: [@yourrestaurantfacebookhandle]"
     }
   };
   
   createCard("description", contentHome.description);
   createCard("schedule", contentHome.schedule);
   createCard("contact", contentHome.contact);
}
}