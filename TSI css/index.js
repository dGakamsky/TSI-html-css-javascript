let game1Div = document.getElementById("game1div")
let game2Div = document.getElementById("game2div")
let game3Div = document.getElementById("game3div")
let audio = new Audio("01 Wings Of Liberty.mp3")
let zergDiv = document.getElementById("zergGuide")
let protossDiv = document.getElementById("protossGuide")
let terranDiv = document.getElementById("terranGuide")

function loadgame1(){game1Div.innerHTML += `<iframe width="300px" height="300px" src="https://www.addictinggames.com/embed/html5-games/20543" scrolling="yes" style="border:none"></iframe>`}

function loadgame2(){game2Div.innerHTML += `<iframe width="300px" height="300px" src="https://www.addictinggames.com/embed/html5-games/20305" scrolling="no" style="border:none"></iframe>`}

function loadgame3(){game3Div.innerHTML += `<iframe width="300px" height="300px" src="https://www.addictinggames.com/embed/html5-games/20830" scrolling="no" style="border:none"></iframe>`}




function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ad2018c6amshafa81a681feb275p197c9ejsnd889565de76c',
		'X-RapidAPI-Host': 'starcraft-ii.p.rapidapi.com'
	}
};

function getZergGuide(){
fetch('https://starcraft-ii.p.rapidapi.com/learning/zerg/page/1/', options)
	.then(res => res.json())
    .then(response=> {
        zergDiv.innerHTML = `<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>  `
        });

}

function getTerranGuide(){
    fetch('https://starcraft-ii.p.rapidapi.com/learning/terran/page/1/', options)
        .then(res => res.json())
        .then(response=> {
            terranDiv.innerHTML = `<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>  `
            });
    
}

function getProtossGuide(){
fetch('https://starcraft-ii.p.rapidapi.com/learning/protoss/page/1/', options)
	.then(res => res.json())
    .then(response=> {
        protossDiv.innerHTML = `<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>  `
        });

}
    

