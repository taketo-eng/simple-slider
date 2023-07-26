const target = document.getElementById("target")

const sliderItems = document.querySelectorAll("#target .slider-data .slider-item")

// create
const sliderShow = document.createElement("div")
const main = document.createElement("div")
const extra = document.createElement("div")

// add classes
sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hidden")
main.classList.add("main", "full-width")
extra.classList.add("extra", "full-width")

// initial setting
main.append(sliderItems[0])

sliderShow.append(main)
sliderShow.append(extra)
target.append(sliderShow)

// for buttons
const controls = document.createElement("div")
const leftBtn = document.createElement("button")
leftBtn.innerHTML = "<"
const rightBtn = document.createElement("button")
rightBtn.innerHTML = ">"

// button classes
controls.classList.add("d-flex", "justify-content-center", "mt-2")
leftBtn.classList.add("btn", "btn-light", "mx-3")
rightBtn.classList.add("btn", "btn-light", "mx-3")

controls.append(leftBtn)
controls.append(rightBtn)
target.append(controls)

main.setAttribute("data-index", "0")

function slideJump(steps, animationType) {
    const currentIndex = Number(main.getAttribute("data-index"))
    let index = (currentIndex + steps) % sliderItems.length
    if (index < 0) {
        index += sliderItems.length
    }
    const currentElement = sliderItems[currentIndex]
    const nextElement = sliderItems[index]
    main.setAttribute("data-index", index.toString())

    animateMain(currentElement, nextElement, animationType)
}

function animateMain(currentElem, nextElem, animationType) {
    main.innerHTML = ""
    extra.innerHTML = ""
    main.append(nextElem)
    extra.append(currentElem)
    main.classList.add("expand-animation")
    extra.classList.add("deplete-animation")

    if (animationType === "right") {
        sliderShow.innerHTML = ""
        sliderShow.append(extra)
        sliderShow.append(main)
    } else if (animationType === "left") {
        sliderShow.innerHTML = ""
        sliderShow.append(main)
        sliderShow.append(extra)
    }
}

leftBtn.addEventListener("click", () => {
    slideJump(-1, "left")
})
rightBtn.addEventListener("click", () => {
    slideJump(1, "right")
})
