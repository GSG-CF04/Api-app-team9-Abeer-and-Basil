let app = document.querySelector('#root')

let logo = document.createElement("img");
logo.src = "logo.png";
app.appendChild(logo)
let container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);
fetch("https://anapioficeandfire.com/api/books")
.then(resp=>resp.json())
.then((data)=>{
    data.forEach(book => {
        console.log(data)
        let card =document.createElement('div')
        card.setAttribute('class','card')
        container.appendChild(card)
        let divDetalis=document.createElement('div')
        divDetalis.setAttribute('class','details')
        let authors=document.createElement('p')
        authors.textContent=`Authors: ${book.authors}`
        divDetalis.appendChild(authors)
        card.appendChild(divDetalis)

       
    })
})
.catch(error=> console.log(error))

