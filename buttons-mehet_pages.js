const right = document.getElementById("nav-r")

right.addEventListener("mousedown", () => {
    right.src = "assets/right/held.png"
})
right.addEventListener("mouseup", () => {
    right.src = "assets/right/hover.png"
})
right.addEventListener("mouseenter", () => {
    right.src = "assets/right/hover.png"
})
right.addEventListener("mouseleave", () => {
    right.src = "assets/right/idle.png"
})

//-----------------------------------------------//
const left = document.getElementById("nav-l")

left.addEventListener("mousedown", () => {
    left.src = "assets/left/held.png"
})
left.addEventListener("mouseup", () => {
    left.src = "assets/left/hover.png"
})
left.addEventListener("mouseenter", () => {
    left.src = "assets/left/hover.png"
})
left.addEventListener("mouseleave", () => {
    left.src = "assets/left/idle.png"
})

//-----------------------------------------------////-----------------------------------------------//
//pictures
const pic1 = document.getElementById("pic1")


pic1.addEventListener("mouseenter", () => {
    pic1.src = "assets/button/fityma/pic1-hgh.png"
})
pic1.addEventListener("mouseleave", () => {
    pic1.src = "assets/button/fityma/pic1.png"
})