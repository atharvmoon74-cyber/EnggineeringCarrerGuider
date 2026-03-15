/* =======================================
ENGINEERING CAREER EXPLORER SCRIPT
======================================= */


/* ---------------------------
BRANCH LINKS
--------------------------- */

const branches = {
aerospace:"branches/Aerospace.html",
agriculture:"branches/Agricultural.html",
aiml:"branches/AIML.html",
civil:"branches/Civil.html",
cse:"branches/CSE.html",
datascience:"branches/DataScience.html",
electrical:"branches/Electrical.html",
electronics:"branches/Electronics.html",
mechanical:"branches/Mechanical.html",
robotics:"branches/Robotics.html"
}


/* ---------------------------
OPEN BRANCH PAGE
--------------------------- */

function openBranch(branch){

if(branches[branch]){
window.location.href = branches[branch]
}

}


/* ---------------------------
CREATE BRANCH BUTTONS
--------------------------- */

function createBranchUI(){

const container = document.getElementById("branches")

Object.keys(branches).forEach(branch =>{

const btn = document.createElement("button")

btn.className = "branchButton"

btn.innerText = branch.toUpperCase()

btn.onclick = () => openBranch(branch)

container.appendChild(btn)

})

}


/* ---------------------------
FULL SCREEN FIT
--------------------------- */

function fitScreen(){

document.body.style.minHeight = window.innerHeight + "px"

}

window.addEventListener("resize",fitScreen)


/* ---------------------------
BACKGROUND PARTICLES
--------------------------- */

function createParticles(){

for(let i=0;i<40;i++){

let p = document.createElement("div")

p.className="particle"

p.style.left=Math.random()*100+"vw"

p.style.animationDuration = (8+Math.random()*10)+"s"

document.body.appendChild(p)

}

}


/* ---------------------------
ANIMATE BUTTONS
--------------------------- */

function animateButtons(){

const buttons=document.querySelectorAll(".branchButton")

buttons.forEach((btn,i)=>{

btn.style.opacity=0
btn.style.transform="translateY(40px)"

setTimeout(()=>{

btn.style.transition="0.6s"
btn.style.opacity=1
btn.style.transform="translateY(0)"

},200*i)

})

}


/* ---------------------------
SEARCH FILTER
--------------------------- */

function filterBranches(){

const input=document.getElementById("search").value.toLowerCase()

const buttons=document.querySelectorAll(".branchButton")

buttons.forEach(btn=>{

if(btn.innerText.toLowerCase().includes(input)){
btn.style.display="block"
}else{
btn.style.display="none"
}

})

}


/* ---------------------------
INIT APP
--------------------------- */

window.onload=()=>{

fitScreen()

createBranchUI()

createParticles()

setTimeout(animateButtons,300)

}