// slideshow
let slideShowDiv = document.querySelector(".slideShow")
let slideShowDivs = ()=>{
    for(let i = 1 ; i<= 5 ; i++) {
        let div = document.createElement("div")
        div.style.backgroundImage = `url(../images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add("change")
        slideShowDiv.appendChild(div)
    }
}
slideShowDivs()
let divs = document.querySelectorAll(".slideShow div")
let counter = 1
let interval = ()=>{
    setInterval(()=>{
        counter++
        let div = document.querySelector(".slideShow .change")
        div.classList.remove("change")

        if (counter < divs.length){
            div.nextElementSibling.classList.add("change")
        }else {
            divs[0].classList.add("change")
            counter = 1
        }

    } , 10000)
}

// cube
let cube = document.querySelector(".cube")
let y = 0
let x = 0
let z = 0
let booli = true
let intervalCube;
let top_x_control = document.querySelector(".top_x_control")
top_x_control.addEventListener("click" , ()=>{

    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
let bottom_x_control = document.querySelector(".bottom_x_control")
bottom_x_control.addEventListener("click" , ()=>{
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})
let left_y_control = document.querySelector(".left_y_control")
left_y_control.addEventListener("click" , ()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`
})
let right_y_control = document.querySelector(".right_y_control")
right_y_control.addEventListener("click" , ()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`
})
let top_z_control = document.querySelector(".top_z_control")
top_z_control.addEventListener("click" , ()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})
let down_z_control = document.querySelector(".down_z_control")
down_z_control.addEventListener("click" , ()=>{
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})
let controls = document.querySelector(".controls")
controls.addEventListener("mouseover" , ()=>{
    booli = false
    playPause()
})
controls.addEventListener("mouseleave" , ()=>{
    booli = true
    playPause()
})
function playPause () {
    if (booli) {
        intervalCube =setInterval(()=>{
            cube.style.transform = `rotateX(${x++}deg) rotateY(${y++}deg) rotateZ(${z++}deg)`
        },100)
    } else {
        clearInterval(intervalCube)
    }
}
playPause()

let section_2 = document.getElementById("section-2")
let section_4 = document.getElementById("section-4")
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset + window.innerHeight > section_2.offsetTop + section_2.offsetHeight/2) {
        section_2.classList.add("change")
    }
    if (window.pageYOffset + window.innerHeight > section_4.offsetTop) {
        section_4.classList.add("visible")
    }
})

// watch slider

let watch_bands = document.querySelector(".watch_bands")
let watch_cases = document.querySelector(".watch_cases")
let upControl = document.querySelector(".upControl")
let rightControl = document.querySelector(".rightControl")
let leftControl = document.querySelector(".leftControl")
let downControl = document.querySelector(".downControl")
let axisY = 0
let axisX = 0

function hideControl () {
    if (axisY === -245) {
        upControl.parentElement.classList.add("hide_control")
    } else {
        upControl.parentElement.classList.remove("hide_control")
    }
    if (axisY === 70) {
        downControl.parentElement.classList.add("hide_control")
    } else {
        downControl.parentElement.classList.remove("hide_control")
    }
    if (axisX === 140) {
        rightControl.parentElement.classList.add("hide_control")
    } else {
        rightControl.parentElement.classList.remove("hide_control")
    }
    if (axisX === -175) {
        leftControl.parentElement.classList.add("hide_control")
    } else {
        leftControl.parentElement.classList.remove("hide_control")
    }
}
upControl.addEventListener("click" , ()=>{
    watch_cases.style.marginTop = `${axisY -= 35}rem`
    hideControl()
})
rightControl.addEventListener("click" , ()=>{
    watch_bands.style.marginRight = `${axisX +=35}rem`
    hideControl()
})
leftControl.addEventListener("click" , ()=>{
    watch_bands.style.marginRight = `${axisX -= 35}rem`
    hideControl()
})
downControl.addEventListener("click" , ()=>{
    watch_cases.style.marginTop = `${axisY += 35}rem`
    hideControl()
})