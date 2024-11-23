import "./style.css";

const Home = () => {

    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("img");

    const img = document.createElement("img");

    const details = document.createElement("div");
    details.classList.add("details");
    
    const paragraphs = [
        "ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, alias voluptates nihil commodi omnis dolorem voluptatum quod asperiores voluptate! Ab deleniti asperiores tempore. Temporibus cupiditate voluptates a, voluptatem corrupti hic. ",
        "ipsum dolor sit, amet consectetur adipisicing elit. Rem ab debitis laborum tempora praesentium aliquid sit beatae, corrupti illo magni illum vitae fuga soluta rerum itaque dolorum architecto sunt iusto.",
        "bipsum dolor sit amet consectetur adipisicing elit. Esse, velit! Commodi temporibus necessitatibus consectetur velit voluptates quasi eos delectus blanditiis iusto adipisci, sapiente saepe, quia veritatis molestias magnam optio modi.",
    ]
    let titles = [
        "Title1",
        "Title2",
        "Title3",
    ]



    const p = document.createElement("p");
    p.classList.add("p");
    
    const lineBreaks = 3;

paragraphs.forEach((text, index) => {
    const strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(titles[index])); 
        
      p.appendChild(strong);
      
      p.appendChild(document.createElement("br"));

      p.appendChild(document.createTextNode(text));

      if (index < paragraphs.length - 1) {
        for (let i = 0; i < lineBreaks; i++) {
          p.appendChild(document.createElement("br")
        );
        }
      }
      details.appendChild(p)
    });


    container.appendChild(img);
    container.appendChild(details);
    content.appendChild(container);
    details.appendChild(p)

}

Home();
