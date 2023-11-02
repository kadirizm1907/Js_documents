

const header = document.querySelector("header")
const addButton = document.getElementById("btn")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")






header.onmouseover = function(){
    header.style.color = "white"
    header.style.backgroundColor = "red"
}
header.onmouseout = function(){
    header.style.color = "red"
    header.style.backgroundColor = "transparent"
}




const yazdir = () => {
    document.write("Hello from the otherside")
}

//? onload event i html ve css kodlarinin render edilmesinin hemen akabinde calisir
// window.onload = yazdir() 

//? window yuklendiginde input a odaklaniyor
window.addEventListener("load", () => {
    input.focus()
}) 


//? yontem-4 addEventListenir metodu ile event ekleme

// addButton.addEventListener("click", () => {
//     alert("Buton tiklandi")
//     })

addButton.addEventListener("click", () => {
    if(!input.value.trim()){
        alert("Lutfen bir bilgi yaziniz")
    }else{
        const li = document.createElement("li")
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    ul.appendChild(li)
    input.value= ""
    input.focus()
    }
    })
//? input elementinin uzerindeyken klavyeden bir tusa basildiginda tetiklenir. basilan tus "enter" ise enter butonu tiklama ozelligini gosterir. 
//? keyup tusa basilip birakildiginda anlamindadir
input.addEventListener("keyup", (event) =>{
if (event.code === "Enter")
addButton.click()
})