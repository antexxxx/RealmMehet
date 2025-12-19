const button_mehet = document.getElementById("button-mehet")
const tooltip_mehet = document.getElementById("tip-mehet")
const info_mehet = document.getElementById("info-mehet")

button_mehet.addEventListener("mouseenter", () => {
    button_mehet.src = "assets/button/mehet/hover.png"
    tooltip_mehet.src = "assets/button/mehet/tip-mehet.png"
})
button_mehet.addEventListener("mouseleave", () => {
    button_mehet.src = "assets/button/mehet/idle.png"
    tooltip_mehet.src = "assets/button/tip-hidden.png"
})
button_mehet.addEventListener("mousedown", () => {
    button_mehet.src = "assets/button/mehet/held.png"
})
button_mehet.addEventListener("mouseup", () => {
    button_mehet.src = "assets/button/mehet/hover.png"
})


//touchscreen supprot
button_mehet.addEventListener("touchstart", () => {
    button_mehet.src = "assets/button/mehet/held.png"
})
button_mehet.addEventListener("touchend", () => {
    button_mehet.src = "assets/button/mehet/idle.png"
})

info_mehet.addEventListener("click", () => {
    tooltip_mehet.src = "assets/button/mehet/tip-mehet.png"
})

//----------------------------------------------------//

const button_plc2 = document.getElementById("button-plc2")
const tooltip_plc2 = document.getElementById("tip-plc2")
const info_plc2 = document.getElementById("info-plc2")

button_plc2.addEventListener("mouseenter", () => {
    button_plc2.src = "assets/button/placeholder/hover.png"
    tooltip_plc2.src = "assets/button/placeholder/tip.png"
})
button_plc2.addEventListener("mouseleave", () => {
    button_plc2.src = "assets/button/placeholder/idle.png"
    tooltip_plc2.src = "assets/button/tip-hidden.png"
})
button_plc2.addEventListener("mousedown", () => {
    button_plc2.src = "assets/button/placeholder/held.png"
})
button_plc2.addEventListener("mouseup", () => {
    button_plc2.src = "assets/button/placeholder/hover.png"
})


//touchscreen supprot
button_plc2.addEventListener("touchstart", () => {
    button_plc2.src = "assets/button/placeholder/held.png"
})
button_plc2.addEventListener("touchend", () => {
    button_plc2.src = "assets/button/placeholder/idle.png"
})

info_plc2.addEventListener("click", () => {
    tooltip_plc2.src = "assets/button/placeholder/tip.png"
})
//----------------------------------------------------//

const button_plc3 = document.getElementById("button-plc3")
const tooltip_plc3 = document.getElementById("tip-plc3")
const info_plc3 = document.getElementById("info-plc3")

button_plc3.addEventListener("mouseenter", () => {
    button_plc3.src = "assets/button/placeholder/hover.png"
    tooltip_plc3.src = "assets/button/placeholder/tip.png"
})
button_plc3.addEventListener("mouseleave", () => {
    button_plc3.src = "assets/button/placeholder/idle.png"
    tooltip_plc3.src = "assets/button/tip-hidden.png"
})
button_plc3.addEventListener("mousedown", () => {
    button_plc3.src = "assets/button/placeholder/held.png"
})
button_plc3.addEventListener("mouseup", () => {
    button_plc3.src = "assets/button/placeholder/hover.png"
})


//touchscreen supprot
button_plc3.addEventListener("touchstart", () => {
    button_plc3.src = "assets/button/placeholder/held.png"
})
button_plc3.addEventListener("touchend", () => {
    button_plc3.src = "assets/button/placeholder/idle.png"
})

info_plc3.addEventListener("click", () => {
    tooltip_plc3.src = "assets/button/placeholder/tip.png"
})

//----------------BUG-REPORT-BUTTON-------------//
const bugreport = document.getElementById("bugreport")

bugreport.addEventListener("mouseenter", () => {
    bugreport.src = "assets/bugreport/hover.png"
})

bugreport.addEventListener("mouseleave", () => {
    bugreport.src = "assets/bugreport/idle.png"
})

bugreport.addEventListener("mousedown", () => {
    bugreport.src = "assets/bugreport/held.png"
})

bugreport.addEventListener("mouseup", () => {
    bugreport.src = "assets/bugreport/hover.png"
})
