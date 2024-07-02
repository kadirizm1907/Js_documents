

const bgColor = document.querySelector(".bgDiv")
const btnOver = document.querySelector(".btn-over")
const btnClick = document.querySelector(".btn-click")
const colorInput = document.getElementById("colorInput")
const colorText = document.getElementById("colorText")

const getRandomColor = () => {
    const letter = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    colorInput.value = color
    colorText.textContent = color
    return color
}
console.log(getRandomColor());
btnClick.addEventListener("click", () => {
    bgColor.style.backgroundColor = getRandomColor()
})
btnOver.addEventListener("mouseover", () => {
    bgColor.style.backgroundColor = getRandomColor()
})

colorInput.addEventListener("change", () => {
    bgColor.style.backgroundColor = colorInput.value
})
// colorInput.addEventListener("keyup", (event) => {
//     if (event.code === "Enter")
//         colorInput.click()
// })
windows.addEventListener("load", ()=>{
    colorInput.style.backgroundColor = getRandomColor()
})