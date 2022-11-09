let div1 = document.getElementById("1")
let div2 = document.getElementById("2")
let div3 = document.getElementById("3")
let body = document.getElementById("body")
let bg = document.getElementById("background")
let img = document.getElementById("imagediv")

function changeStyleOne(){
    div1.innerHTML = `<h1> <b> This text is now blue, has large lettering, and is bold. </b> </h1>`;
    div1.style.color = "blue"
}
function changeStyleTwo(){
    div2.innerHTML = `<h6><i> this text is now small and italicized</i></h6>`;
    
}
function changeStyleThree(){
    div3.innerHTML = `this text is now comic sans`;
    div3.style.font = "comic sans";
    
}

function setBodyStyle(){
    body.style.textAlign = "center";
    body.style.backgroundColor = "lightblue";
}

function setBackgroundStyle(){
    bg.setAttribute("style","width:500px;height:1000px;background-color:white; margin: auto; border:10px black; padding: 50px 50px")
}

function loadImage(){
    img.innerHTML = `<img src="images/test_gif.gif" alt="look at how cool it is" height="200" width="300">`
}

bg.onload = setBackgroundStyle()
body.onload =  setBodyStyle()
img.onload = loadImage()