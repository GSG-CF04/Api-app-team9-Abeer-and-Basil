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
        let divPublisher=document.createElement('div')
        divPublisher.setAttribute('class','details')
        let publisher=document.createElement('p')
        publisher.textContent=`Publisher: ${book.publisher}`
        divPublisher.appendChild(publisher)
        card.appendChild(divPublisher)

        let divCountry=document.createElement('div')
        divCountry.setAttribute('class','details')
        let country=document.createElement('p')
        country.textContent=`Country: ${book.country}`
        divCountry.appendChild(country)
        card.appendChild(divCountry)
        let divMediaType=document.createElement('div')
        divMediaType.setAttribute('class','details')
        let mediaType=document.createElement('p')
        mediaType.textContent=`MediaType: ${book.mediaType}`
        divMediaType.appendChild(mediaType)
        card.appendChild(divMediaType)
        
        let divReleased=document.createElement('div')
        divReleased.setAttribute('class','details')
        let released=document.createElement('p')
        released.textContent=`Released: ${book.released}`
        divReleased.appendChild(released)
        card.appendChild(divReleased)
        
        let divNumber=document.createElement('div')
        divNumber.setAttribute('class','details')
        let numberOfPages=document.createElement('p')
        numberOfPages.textContent=`Number Of Pages: ${book.numberOfPages}`
        divNumber.appendChild(numberOfPages)
        card.appendChild(divNumber)

        let divs=document.createElement('div')
        divs.setAttribute('class','nameHover')
        let bookImg=document.createElement('p')
        bookImg.setAttribute('id','bookImage')
        bookImg.src='book.png'
        divs.appendChild(bookImg)
        
        let names=document.createElement('h2')
        names.textContent=book.name
        divs.appendChild(names)
        card.appendChild(divs)
       
    })
})
.catch(error=> console.log(error))

