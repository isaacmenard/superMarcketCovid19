// JavaScript Document
var leftArrow = null;
var topArrow = null;
var posLeft = 0;
var posTop = 0;
var sizeLeft = 1300
var sizeTop = 800
var money = 1500
var batimentConfig = []
var hourDep = 8
var hourFinish = 22
var hours = 7
var minutes = 50


refreshMoney()
document.getElementsByClassName("textDialogue")[0].style.bottom = "-400px"
document.getElementsByClassName("monster")[0].style.bottom = "-400px"
document.getElementsByClassName("textDialogue")[0].style.left = "60%"
document.getElementsByClassName("left")[0].style.left="-15%"
document.getElementsByClassName("left")[1].style.left="-15%"
document.getElementsByClassName("batiment")[0].style.width = sizeLeft + "px"
document.getElementsByClassName("batiment")[0].style.height = sizeTop + "px"
document.getElementsByClassName("batiment")[0].style.marginLeft = 0
document.getElementsByClassName("batiment")[0].style.marginTop = 0
document.getElementsByClassName("leftWallContenaire")[0].style.marginTop = -((sizeLeft / 50 * 57)/22)+ "px";
document.getElementsByClassName("rightWallContenaire")[0].style.marginTop = -((sizeLeft / 50 * 57)/22)+ "px"

setTimeout(function(){
	document.getElementsByClassName("textDialogue")[0].style.transition = "0.5s"
	document.getElementsByClassName("monster")[0].style.transition  = "0.5s"
	document.getElementsByClassName("left")[0].style.transition  = "0.5s"
	document.getElementsByClassName("left")[1].style.transition  = "0.5s"
},100)
setInterval(update,10)

for(var i = 0; i < 50;i++){
	var newPillon = document.createElement("div");
	newPillon.alt="pillon"
	newPillon.className = "pillon pillonTop";
	newPillon.style.width = sizeLeft / 50 +"px"
	newPillon.style.height = (sizeLeft / 50 * 57)/22 + "px"
	document.getElementsByClassName("topWallContenaire")[0].appendChild(newPillon)
	
	var newPillon = document.createElement("div");
	newPillon.alt="pillon"
	newPillon.className = "pillon pillonDown";
	newPillon.style.width = sizeLeft / 50 +"px"
	newPillon.style.height = (sizeLeft / 50 * 14)/22 + "px"
	document.getElementsByClassName("downWallContenaire")[0].appendChild(newPillon)
}
for(var i = 0; i <55;i++){
	
	if(i != 26 && i != 27&&i != 25 && i != 28){
		var newPillon = document.createElement("div");
		newPillon.className = "pillon pillonLeft";
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("leftWallContenaire")[0].appendChild(newPillon)
	}else{
		var newPillon = document.createElement("div");
		newPillon.alt="pillon"
		newPillon.style.width = sizeTop / 50 +"px"
		newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
		document.getElementsByClassName("leftWallContenaire")[0].appendChild(newPillon)
	}
	
	var newPillon = document.createElement("div");
	newPillon.className = "pillon pillonRight";
	newPillon.alt="pillon"
	newPillon.style.width = sizeTop / 50 +"px"
	newPillon.style.height = (sizeTop / 50 * 11)/12 + "px"
	document.getElementsByClassName("rightWallContenaire")[0].appendChild(newPillon)
}

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        topArrow = 1
    }
    else if (e.keyCode == '40') {
        topArrow = -1
    }
    else if (e.keyCode == '37') {
       leftArrow = 1
    }
    else if (e.keyCode == '39') {
       leftArrow = -1
    }

}
document.onkeyup = checkKeyUp;
function checkKeyUp(e) {

    e = e || window.event;

    if (e.keyCode == '38' && topArrow == 1) {
        topArrow = null
    }
    else if (e.keyCode == '40' && topArrow == -1) {
        topArrow = null
    }
    else if (e.keyCode == '37' && leftArrow == 1) {
       leftArrow = null
    }
    else if (e.keyCode == '39' && leftArrow == -1) {
       leftArrow = null
    }

}
function update(){
	//if(leftArrow != null){
	//	posLeft += 9 * leftArrow
	//	document.getElementsByClassName("batiment")[0].style.marginLeft = posLeft +"px";
	//}
	//if(topArrow != null){
	//	posTop += 9 * topArrow
	//	document.getElementsByClassName("batiment")[0].style.marginTop = posTop +"px";
	//}
}

function dialogueOpen(text){
	document.getElementsByClassName("textDialogue")[0].innerHTML = ""
	document.getElementsByClassName("textDialogue")[0].style.bottom = "50px"
	document.getElementsByClassName("textDialogue")[0].style.left = "0"
	document.getElementsByClassName("monster")[0].style.bottom = "310px"
	var count = 0;
	var interval = setInterval(function(){
		document.getElementsByClassName("textDialogue")[0].innerHTML += text.split("")[count]
		count++
		if(count >= text.split("").length){
			clearInterval(interval)
			setTimeout(dialogueClose,3000)
		}
	},50)
}
function dialogueClose(text){
	document.getElementsByClassName("textDialogue")[0].style.bottom = "-400px"
	document.getElementsByClassName("textDialogue")[0].style.left = "60%"
	document.getElementsByClassName("monster")[0].style.bottom = "-400px"
}

function tutoriel(){
	setTimeout(function(){
		dialogueOpen("Salut, je suis Patrick ! C'est moi qui vais t'aider durant cette aventure !")
	},2000)

	setTimeout(function(){
		dialogueOpen("Comme tu le sais, le COVID-19 Alias Coronavirus créé la panique ! En effet les gens paniquent et veulent faire des réserves en pillant notre super marché ! Ton objectif est donc de survivre au différentes journées et alimenter assez de monde..")
	},10000)

	setTimeout(function(){
		dialogueOpen("Rappelons-le, nous sommes en Guerre ! Bonne chance à toi !")
	},27000)
	
	setTimeout(function(){
		start()
	},33000)
}
function start(){
	document.getElementsByClassName("left")[0].style.left="0"
	setTimeout(function(){
			document.getElementsByClassName("left")[1].style.left="0"
	},200)
	addMinute()
	setInterval(addMinute,1000)
}

function refreshMoney(){
	document.getElementById("money").innerHTML = money
}
function buy(prix,element){
	if(batimentConfig.length <  14 && money - prix >= 0){
		money -= prix
		refreshMoney()
		addBatiment(element)
	}
}
function addBatiment(element){
	var newBat = document.createElement("div")
	newBat.className = "batElement "+element
	if(batimentConfig.length < 7){
		newBat.style.left = ((sizeLeft / 8) * (batimentConfig.length+1)-25) +"px"
		newBat.style.top = sizeTop / 12 +"px"
	}else{
		newBat.style.left = ((sizeLeft / 8) * (batimentConfig.length-6)-25)+"px"
		newBat.style.top = sizeTop / 12 * 6+"px"
	}
	document.getElementsByClassName("bat"+batimentConfig.length)[0].appendChild(newBat)
	batimentConfig.push(element)
}

function addMinute(){
	if(minutes +1 < 60){
			minutes++
	}else{
		minutes = 0
		hours++
	}
	if(minutes < 10){
		document.getElementById("hour").innerHTML = hours+"h0"+minutes
	}else{
		document.getElementById("hour").innerHTML = hours+"h"+minutes
	}
	if(hours == hourDep && minutes == 0){
		launchVague()
	}
}
function launchVague(){
	for(var i = 0; i < 15; i++){
		var mignion = document.createElement("img")
		mignion.alt = "img"
		mignion.className = "mignion"
		mignion.src = "https://i.ya-webdesign.com/images/transparent-personality-pixel-art-2.png"
		mignion.style.top = sizeTop/2 -10 +"px"
		mignion.style.left = "0px"
		document.getElementsByClassName("int")[0].appendChild(mignion)
		mignion.style.transition = "1s"
		var count = 0
		var choix = Math.floor(Math.random() * Math.floor(batimentConfig.length))
		allerPos(mignion,choix)
	}
}
function allerPos(element,pos){
	if(pos < 7){
		element.style.transition = (1*(pos+1))+"s"
		var set = setTimeout(function(){
			element.style.left = ((sizeLeft / 8) * (pos+1))+40 +"px"
			setTimeout(function(){
				element.style.transition = "0.5s"
				element.style.top = sizeTop / 4+"px"
			},(1*(pos+1))*1000)
			
		},100)
	}else{
		element.style.transition = (1*(pos-6))+"s"
		var set = setTimeout(function(){
			element.style.left = ((sizeLeft / 8) * (pos-6))+40 +"px"
			setTimeout(function(){
				element.style.transition = "0.5s"
				element.style.top = sizeTop / 4*3+"px"
			},(1*(pos-6))*1000)
		},100)
	}
}