let quotesDiv = document.getElementById("quotes")

fetch("https://api.kanye.rest")
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML +=  `<p> ${quote.quote} </p>`
})

let catButton = document.getElementById("catButton")

catButton.addEventListener("click", evt => {
    let catDiv = document.getElementById("catPic")

    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(cats =>{
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3> Here is a fucking cat </h3>
            <img src = "${cat.url}" alt="shithead" />`

        });
    })
})

