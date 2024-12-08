import{container, content, img, stick} from "./index"

export const menuTab = () => {
    
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");

    const contentMenu = document.createElement("div");
    contentMenu.classList.add("contentMenu")

    const createMenu = (menuTitle, menuItems) => {

        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("menu-category");
        categoryContainer.setAttribute("data-category", menuTitle);
      

        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = menuTitle;
        categoryContainer.appendChild(categoryTitle);
      

        menuItems.forEach((menuItem) => {

          const cardContainer = document.createElement("div");
          cardContainer.classList.add("menu-item");
      

          const titleElement = document.createElement("h4");
          titleElement.textContent = menuItem.title;
          cardContainer.appendChild(titleElement);
      
  
          const descriptionElement = document.createElement("p");
          descriptionElement.textContent = menuItem.description;
          cardContainer.appendChild(descriptionElement);
      

          const priceElement = document.createElement("p");
          priceElement.textContent = `Price: ${menuItem.price}`;
          priceElement.classList.add("menu-price");
          cardContainer.appendChild(priceElement);
      

          categoryContainer.appendChild(cardContainer);
        });
      
 
        contentMenu.appendChild(categoryContainer); 
      };
      
      containerMenu.appendChild(contentMenu);
      container.appendChild(containerMenu);
      content.appendChild(container);
    const menuContent = {
    
    Beverages:
    [{title: "House-Brewed Iced Tea", 
    description: "A refreshing blend of black tea, sweetened to perfection",
    price:"$2.50"},
    
    {title:"Organic Herbal Tea", 
    description:"A soothing blend of calming herbs, perfect for any time of day.",
    price:"$3.50"},

    {title:"Freshly Squeezed Lemonade",
    description:"A tangy and refreshing drink made with real lemons.",
    price:"$3.50"}],

    Deserts:[
    {title:"Warm Apple Pie",
    description:"A classic dessert, served warm with a scoop of vanilla ice cream.",
    price:"$5.00"
    },
    
    {title:"Chocolate Lava Cake",
    description:" A decadent dessert with a molten chocolate center.",
    price:"$6.00"
    },

    {title:"Homemade Cheesecake",
    description:" A rich and creamy cheesecake, baked to perfection.",
    price:"$6.50"
    }
],

    Meals:[
    {title:"Classic Grilled Cheese",
    description:"A simple yet satisfying dish, made with gooey cheese and toasted bread.",
    price:"$7.00",
    },

    {title:"Tomato Basil Soup<",
    description:"A hearty and flavorful soup, perfect for a cold day.",
    price:"$8.00",
    },
    
    {title:"Chicken Pot Pie<",
    description:"A classic comfort food, filled with tender chicken and vegetables.",
    price:"$12.00",
    },

    {title:"Beef Bourguignon",
    description:"A rich and flavorful French stew, made with slow-cooked beef and red wine.",
    price:"$15.00<",
    },]
    
    }

    Object.entries(menuContent).forEach(([category, items]) => {
        createMenu(category, items);
      });
      
}